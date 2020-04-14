async function displayGames(){
    let response = await fetch('api/videogames');
    let gamesJSON = await response.json();
    let gamesDiv = document.getElementById("videogame-list");
    gamesDiv.innerHTML="";

    for(i in gamesJSON){
        let game = gamesJSON[i];
        gamesDiv.append(getGameItem(game));
    }
}


function getGameItem(game){
    let gameSection = document.createElement("section");
    gameSection.classList.add("game");
    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", game.id);
    aTitle.href="#";
    aTitle.onclick = showGameDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = game.name;
    aTitle.append(h3Elem);
    gameSection.append(aTitle);

    return gameSection;
}


async function showGameDetails(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/videogames/${id}`);

    if(response.status != 200){
        //display an error
        console.log("Error receiving game");
        return;
    }

    let videogame = await response.json();
    document.getElementById("game-id").textContent = videogame.id;
    document.getElementById("txt-name").value = videogame.name;
    document.getElementById("txt-year").value = videogame.year;
    document.getElementById("txt-dev").value = videogame.developer;
    document.getElementById("txt-rating").value = videogame.rating;
}

async function addGame(){
    let gameName = document.getElementById("txt-add-name").value;
    let gameYear = document.getElementById("txt-add-year").value;
    let gameDeveloper = document.getElementById("txt-add-dev").value;
    let gameRating = document.getElementById("txt-add-rating").value;

    let game = {"name":gameName, "year":gameYear, "developer":gameDeveloper, "rating":gameRating};

    let response = await fetch('/api/videogames', {
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(game)
    });

    if(response.status!=200){
        console.log("Error posting data");
        alert("There was an error adding the game.");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayGames();
    alert("Game added successfully!");
}

async function editGame(){
    let gameID = document.getElementById("game-id").textContent;
    let gameName = document.getElementById("txt-name").value;
    let gameYear = document.getElementById("txt-year").value;
    let gameDeveloper = document.getElementById("txt-rating").value;
    let gameRating = document.getElementById("txt-rating").value;

    let game = {"name": gameName, "year":gameYear, "developer":gameDeveloper, "rating": gameRating};

    let response = await fetch(`/api/videogames/${gameID}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(game)
    });

    if(response.status!=200){
        alert("There was an error editing the game.");
        return;
    }

    let result = await response.json();
    displayGames();
    alert("Game edited successfully!");
}

async function deleteGame(){
    let gameID = document.getElementById("game-id").textContent;

    let response = await fetch(`/api/videogames/${gameID}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        return;
    }

    let result = await response.json();
    displayGames();
}

window.onload = function(){
    this.displayGames();

    let addBtn = document.getElementById("btn-add");
    addBtn.onclick = addGame;

    let editBtn = document.getElementById("btn-edit");
    editBtn.onclick = editGame;

    let deleteBtn = document.getElementById("btn-delete");
    deleteBtn.onclick = deleteGame;

}