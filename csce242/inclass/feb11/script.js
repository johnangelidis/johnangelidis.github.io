function displayEmotion(){
    const name = document.getElementById("txt-first-name").value;
    const color = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    const firstError = isBlank(name, "error-name");
    const secondError = isBlank(color, "error-color");
    const thirdError = isBlank(emotion, "error-emotion");

    

    if(firstError||secondError||thirdError) return;

    let displayP = document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");
    displayP.innerHTML = `Welcome ${name}! <br> You are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "blue", "yellow", "green");
    displayEmotion.classList.add(color.toLowerCase());
}

function isBlank(data, errorSpanId){
    if(data.trim()==""){
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }
}

function getEmoji(emotion){
    const emoCI = emotion.toLowerCase();
    if(emoCI=="happy"){
        return ":)";
    }
    else if(emoCI=="sad"){
        return ":(";
    }
    else if(emoCI=="silly"){
        return ":P";
    }
    else if(emoCI=="angry"){
        return ">:|";
    }
    return "";
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;