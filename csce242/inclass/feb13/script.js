function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    
    let displayP = document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");

    //clear all errors before

    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;

    //display results
    displayP.innerHTML = `Welcome ${firstName}!<br>You are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "green", "yellow", "blue");
    displayEmotion.classList.add(favColor.toLowerCase());
}

function isBlank(data, errorSpanId){
    if(data == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function isNotValidNum(data, errorSpanId){
    if(isNaN(data)) {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function getEmoji(emotion){
    const emoCI = emotion.toLowerCase();

    if(emoCI == "happy")
    {
        return ":)"
    }
    else if(emoCI == "sad"){
        return ":(";
    }
    else if(emoCI == "silly"){
        return ":p";
    }
    else if(emoCI == "angry"){
        return ">:|";
    }

    return "";
}

function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

function displayCount(){
    let startNum = parseInt(document.getElementById("txt-start").value);
    let endNum = parseInt(document.getElementById("txt-end").value);
    let result = document.getElementById("ex3-result")
    //if either number is not a number show error appropriately
    if(isNotValidNum(startNum, "error-start") | isNotValidNum(endNum, "error-end"))return;

    //if endNum is <= startNum show an error appropratiely
    if(endNum <= startNum){
        result.innerHTML = `End number cannot be less than or equal to the start number.`
    }

    /*
    result.innerHTML = "Counting: <ul>";
    for(let i=startNum; i<=endNum; i++){
        result.innerHTML+= `<li>${i}</li>`;
    }
    result.innerHTML += "</ul> All Done!!!";
    */

    let ulElem = document.createElement("ul");
    btnCount.after(ulElem);

    for(let i=startNum; i <= endNum; i++){
        let liElem = document.createElement("li");
        liElem.textContent = i;
        ulElem.append(liElem); 
    }
}

function doStuff(){
    let cookieTitle = document.createElement("h3");
    let ulElem = document.createElement("ul");
    let endTitle = document.createElement("p");

    cookieTitle.textContent = "I love Cookies";
    endTitle.textContent = "Cookie Time";
    ulElem.classList.add("cookie-list");
    //add items to DOM
    this.after(cookieTitle);
    cookieTitle.after(ulElem);
    ulElem.after(endTitle);

    //populate numerical list
    for(let i=5; i>= 1; i--){
        let liElem = document.createElement("li");
        liElem.textContent = i;
        ulElem.append(liElem);
    }
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

const btnCount = document.getElementById("btn-go");
btnCount.onclick = displayCount;

const btnDoStuff = document.getElementById("btn-dostuff");
btnDoStuff.onclick = doStuff;