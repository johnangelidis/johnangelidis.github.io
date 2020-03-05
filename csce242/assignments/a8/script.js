var quotes = ["Life is what happens when you're busy making other plans. -John Lennon",
                "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
                "The way to get started is to quit talking and begin doing. -Walt Disney",
                "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
                "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron"];

var colors = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#800080"];
    
var clickHere = document.getElementById("quotes-section")
let result = document.getElementById("result");

result.append(quotes[0]);
let count=0;
function changeQuotes(){
    count++;
    if(count==1){
        result.innerHTML = quotes[1];
    }
    else if(count==2){
        result.innerHTML = quotes[2];
    }
    else if(count==3){
        result.innerHTML = quotes[3];
    }
    else if(count==4){
        result.innerHTML = quotes[4];
    
    }
    else if(count>4){
        count=0;
    }

}

let p = document.getElementsByClassName("rainbow-color");
let rainbow = document.getElementById("rainbow");

function showRainbow(){
    rainbow.classList.toggle("hidden");
    for(var i=0 ; i < p.length; i++) {
        p[i].style.background = colors[i%6];
        p[i].style.color = colors[i%6];
    
     } 
}

clickHere.onclick = changeQuotes;   
document.getElementById("btn-draw").onclick = showRainbow;
    


