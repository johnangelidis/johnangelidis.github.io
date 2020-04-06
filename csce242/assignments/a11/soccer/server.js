const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/soccer', (req,res)=>{
    soccer = [];
    soccer[0] = {
        name:"Arsenal",
        city:"London",
        country:"England",
        nickname:"Gunners",
        arena:"Emirates Stadium",
        img:"arsenal.png"
    }
    soccer[1] = {
        name:"FC Barcelona",
        city:"Barcelona",
        country:"Spain",
        nickname:"Blaugrana",
        arena:"Camp Nou",
        img:"barcelona.png"
    }
    soccer[2] = {
        name:"Borussia Dortmund",
        city:"Dortmund",
        country:"Germany",
        nickname:"BVB",
        arena:"Westfalenstadion",
        img:"dortmund.png"
    }
    soccer[3] = {
        name:"Paris-Saint Germain FC",
        city:"Paris",
        country:"France",
        nickname:"Les Parisiens",
        arena:"Parc de Princes",
        img:"psg.png"
    }
    soccer[4] = {
        name:"Panionios FC",
        city:"Nea Smyrni",
        country:"Greece",
        nickname:"Panthers",
        arena:"Nea Smyrni Stadium",
        img:"panionios.png"
    }
    soccer[5] = {
        name:"AS Roma",
        city:"Rome",
        country:"Italy",
        nickname:"I Giallorossi",
        arena:"Stadio Olimpico",
        img:"roma.png"
    }

    res.json(soccer);
});




app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});