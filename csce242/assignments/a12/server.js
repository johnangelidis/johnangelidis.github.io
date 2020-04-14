const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let games = [
    {id:0, name:"Call of Duty: Modern Warfare 2", year:"2009", developer:"Infinity Ward", rating:"9"},
    {id:1, name:"Grand Theft Auto: Vice City", year:"2002", developer:"Rockstar", rating:"8.4"},
    {id:2, name:"NBA 2K20", year:"2019", developer:"2K Sports", rating:"8.4"},
    {id:3, name:"UFC 3", year:"2018", developer:"EA Sports", rating:"8.4"},
    {id:4, name:"eFootball Pro Evolution Soccer 2020", year:"2019", developer:"Konami", rating:"6"},
    {id:5, name:"Fallout 4", year:"2015", developer:"Bethesda Game Studios", rating:"9.3"}
];

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/videogames', (req,res)=>{
    res.send(games);
});

app.get('/api/videogames/:id', (req,res)=>{
    const game = games.find(g => g.id === parseInt(req.params.id));

    if(!game) res.status(404).send("The game with this id does not exist");

    res.send(game);
});

app.post('/api/videogames', (req, res)=>{
    const result = validateGame(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const game = {
        id:games.length+1,
        name:req.body.name,
        year:req.body.year,
        developer:req.body.developer,
        rating:req.body.rating
    };

    games.push(game);
    res.send(game);
});

app.put('/api/videogames/:id', (req,res)=>{
    const game = games.find(g=>g.id === parseInt(req.params.id));

    if(!game) res.status(404).send("Recipe with given id was not found");

    const result = validateGame(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    game.name = req.body.name;
    game.year = req.body.year;
    game.developer = req.body.developer;
    game.rating = req.body.rating;
    res.send(game);
});

app.delete('/api/videogames/:id', (req,res)=>{
    const game = games.find(g=>g.id === parseInt(req.params.id));

    if(!game){
        req.status(404).send("Game with given id not found");
    }

    const index = games.indexOf(game);
    games.splice(index,1);

    res.send(game);


});



function validateGame(game){
    const schema = {
        name:Joi.string().min(3).required(),
        year:Joi.string().max(4).required(),
        developer:Joi.string().min(3).required(),
        rating:Joi.string().min(1).required()
    };

    return Joi.validate(game, schema);
}

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})