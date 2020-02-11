function displayEmotion() {
    //gather all 3 pieces of information and write them to the console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    console.log(firstName + ", " + favColor + ", " + emotion);

    /*
    let price = parseFloat(document.getElementbyId("txt-price").value);
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent()

    */
    let inf = document.getElementById("info").innerHTML = `${firstName} your favorite color is ${favColor} and you are ${emotion}`;
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

