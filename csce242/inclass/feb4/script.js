function showBoy(){
    console.log("Boy Function");
    let mainTitle = document.getElementById("title").innerHTML = "Boy Stuff";
    let boyStuff1 = document.getElementById("item1").innerHTML = "Trucks";
    let boyStuff2 = document.getElementById("item2").innerHTML = "Trains";
    let boyStuff3 = document.getElementById("item3").innerHTML = "Tools";

}

function showGirl(){
    console.log("Girl Function");
    let mainTitle = document.getElementById("title").innerHTML = "Girl Stuff";
    let girlStuff1 = document.getElementById("item1").innerHTML = "Dolls";
    let girlStuff2 = document.getElementById("item2").innerHTML = "Sparkles";
    let girlStuff3 = document.getElementById("item3").innerHTML = "Pink";

}

function changeImage(){
    console.log("Change Image");
    if(document.getElementById("sad-pic").src == "images/sad.png");
    {
        document.getElementById("sad-pic").src == "images/happy.jpg";
    }
}
let btnBoy = document.getElementById("btn-boy");
let btnGirl = document.getElementById("btn-girl");
btnBoy.onclick= showBoy;
btnGirl.onclick = showGirl;


let sadPic = document.getElementById("sad-pic");
sadPic.onclick = changeImage;

