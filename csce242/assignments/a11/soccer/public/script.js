async function getSoccer(){
    let response = await fetch("http://localhost:3000/api/soccer");
    let soccerJSON = await response.json();
    let soccerDiv = document.getElementById("soccer-list");

    for(i in soccerJSON){
        let team = soccerJSON[i];
        soccerDiv.append(getSoccerTeam(team));
    }
}

function getSoccerTeam(team){
    let soccerSection = document.createElement("section");
    soccerSection.classList.add("teamClass");
    
    //Image
    let imgElem = document.createElement("img");
    let imageLink = "https://johnangelidis.github.io/csce242/json/a11-images/";
    imgElem.src= imageLink + team.img;
    soccerSection.append(imgElem);
    //Name
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = team.name;
    soccerSection.append(h3Elem);
    //Nickname
    let nicknameP = document.createElement("p");
    nicknameP.textContent = `Nickname: "${team.nickname}"`;
    soccerSection.append(nicknameP);
    //Location
    let locationP = document.createElement("p");
    locationP.textContent = `Location: ${team.city}, ${team.country}`;
    soccerSection.append(locationP);
    //Arena
    let arenaP = document.createElement("p");
    arenaP.textContent = `Arena: ${team.arena}`;
    soccerSection.append(arenaP);


    return soccerSection;
}
window.onload = function(){
    getSoccer();
}