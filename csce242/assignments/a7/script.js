let margin = 0;
let percentage = 0;
let color2 = 0;
let color3 = 0;
function changeImage(){  
    let image = document.getElementById("figure");
   
    if(image.getAttribute('src') == "images/walk.png")
    {
        image.src = "images/run.png";
        margin+=10;
        document.getElementById('figure').style.setProperty('--margin', margin + "px" );
    }
    else
    {
        image.src = "images/walk.png";
        margin+=10;
        document.getElementById('figure').style.setProperty('--margin', margin + "px" );
    }

}

function changeGradient(){
    let funds = parseInt(document.getElementById("txt-funds").value);
    let percent = (funds / 10000) * 100;
    document.getElementById('gradient').style.setProperty('--percentage', percent+"%");
    document.getElementById('gradient').style.setProperty('--color2', color2);
    document.getElementById('gradient').style.setProperty('--color3', color3);
}

let btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = changeGradient;