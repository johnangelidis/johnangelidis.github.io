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
    year:String,
    publisher:String,
    rating:String
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
    const result = validateBook(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    updateBook(res, req.params.id, req.body.title, req.body.author, req.body.genre, req.body.year, req.body.publisher, req.body.rating);
});

async function updateBook(res,id,title,author,genre,year,publisher,rating){
    const result = await Book.updateOne({_id:id}, {
        $set:{
            title:title,
            author:author,
            genre:genre,
            year:year,
            publisher:publisher,
            rating:rating
        }
    })

    res.send(result);
}

app.delete('/api/books/:id', (req,res)=>{
    removeBook(res,req.params.id);
});

async function removeBook(res, id){
    const book = await Book.findByIdAndRemove(id);
    res.send(book);
}


function validateBook(book){
    const schema = {
        title:Joi.string().min(1).required(),
        author:Joi.string().min(1).required(),
        genre:Joi.string().min(1).required(),
        year:Joi.string().max(4).required(),
        publisher:Joi.string().min(1).required(),
        rating:Joi.string().min(1).required()
    };

    return Joi.validate(book, schema);
}

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})