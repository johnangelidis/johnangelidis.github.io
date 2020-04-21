const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/books", {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>console.log("Connected to MongoDB"))
    .catch(err => console.error("Couldn't connect to MongoDB", err));

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    genre:String,
    year:Number,
    publisher:String,
    rating:Number
});

const Book = mongoose.model('Book', bookSchema);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/books', (req,res)=>{
    getBooks(res);
});

async function getBooks(res){
    const books = await Book.find();
    console.log(books);
    res.send(books);
}

app.get('/api/books/:id', (req,res)=>{
    getBook(req.params.id, res);
});

async function getBook(id, res){
    const book = await Book.findOne({_id:id});
    console.log(book);
    res.send(book);
}

app.post('/api/books', (req, res)=>{
    const result = validateBook(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const book = new Book({
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        year:req.body.year,
        publisher:req.body.publisher,
        rating:req.body.rating
    });

    createBook(book, res);
});

async function createBook(book, res){
    const result = await book.save();
    console.log(book);
    res.send(book);
}

app.put('/api/books/:id', (req,res)=>{
    const book = books.find(g=>g.id === parseInt(req.params.id));

    if(!book) res.status(404).send("Recipe with given id was not found");

    const result = validateBook(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    book.title = req.body.title;
    book.author = req.body.author;
    book.genre = req.body.genre;
    book.year = req.body.year;
    book.publisher = req.body.publisher;
    book.rating = req.body.rating;
    res.send(book);
});

app.delete('/api/books/:id', (req,res)=>{
    const book = books.find(b=>b.id === parseInt(req.params.id));

    if(!book){
        req.status(404).send("Book with given id not found");
    }

    const index = books.indexOf(book);
    books.splice(index,1);

    res.send(book);
});



function validateBook(book){
    const schema = {
        title:Joi.string().min(3).required(),
        author:Joi.string().max(4).required(),
        genre:Joi.string().max(4).required(),
        year:Joi.string().max(4).required(),
        publisher:Joi.string().min(3).required(),
        rating:Joi.string().min(1).required()
    };

    return Joi.validate(book, schema);
}

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})