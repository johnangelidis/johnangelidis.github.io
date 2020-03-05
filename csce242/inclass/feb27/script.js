let color = "red";
function showToys(){
    const toys = ["Drum", "Ball", "Car", "Bike"];
    let toysResult = document.getElementById("toys-result");
    let ulElem = document.createElement("ul");
    //this.after(ulElem);
    toysResult.append(ulElem); 
    for(let i in toys)
    {
        let liElem = document.createElement("li");
        liElem.textContent = toys[i];
        ulElem.append(liElem);
    
        /*
        if(i%2==0){
            liElem.classList.add("highlight");
        }
        */
    }
}

function toggleToys(){
    let toysResult = document.getElementById("toys-result");

    toysResult.style.backgroundColor = color;
    //toysResult.classList.toggle("hidden");

    if(color=="red" && !toysResult.classList.contains("hidden")){
        color="green";
    }
    else if(color=="green" && !toysResult.classList.contains("hidden")){
        color="red";
    }
}

showToys();
setInterval(function(){toysResult.classList.toggle("hidden");}, 2000)
//document.getElementById("btn-show-toys").onclick = toggleToys;
