function toggleNav(){
    let navItems = document.getElementById("main-nav");
    navItems.classList.toggle("hidden");
}

function toggleExercise1(){
    let ex1 = document.getElementById("exercise1")
    let ex2 = document.getElementById("exercise2");

    ex1.classList.toggle("hidden");
    ex2.className = "hidden";
}

function toggleExercise2(){
    let ex1 = document.getElementById("exercise1")
    let ex2 = document.getElementById("exercise2");

    ex2.classList.toggle("hidden");
    ex1.className = "hidden";
}

function findOldest(){
    let name1 = document.getElementById("txt-name-1").value;
    let age1 = document.getElementById("txt-age-1").value;
    let name2 = document.getElementById("txt-name-2").value;
    let age2 = document.getElementById("txt-age-2").value;
    let name3 = document.getElementById("txt-name-3").value;
    let age3 = document.getElementById("txt-age-3").value;

    if(name1.length < 1 || age1.length < 1 || name2.length < 1 || age2.length < 1 || name3.length < 1 || age3.length < 1){
        document.getElementById("result").innerHTML = `Invalid Information`;
    }
    if(age1>age2 && age1>age3){
        if(age2>age3){
            document.getElementById("result").innerHTML = `${name1}, ${name2}, ${name3}`;
        }
        else{
            document.getElementById("result").innerHTML =`${name1}, ${name3}, ${name2}`;
        }
    }

    if(age2>age1 && age2>age3){
        if(age1>age3){
            document.getElementById("result").innerHTML = `${name2}, ${name1}, ${name3}`;
        }
        else{
            document.getElementById("result").innerHTML = `${name2}, ${name3}, ${name1}`;
        }
    }

    if(age3>age1 && age3>age2){
        if(age1>age2){
            document.getElementById("result").innerHTML = `${name3}, ${name1}, ${name2}`;
        }
        else{
            document.getElementById("result").innerHTML = `${name3}, ${name2}, ${name1}`;
        }
    }

}

function fillGradient(){
    let funds = document.getElementById("txt-funds").value;
    let gradient = document.getElementById("shape");
    if(funds < 2500 && funds > 0){
        shape.classList.toggle("gradient");
    }
    
    else if(funds >= 2500 && funds < 5000){
        shape.classList.toggle("gradient-25");
    }

    else if(funds >= 5000 && funds < 7500){
        shape.classList.toggle("gradient-50");
    }

    else if(funds >= 7500 && funds < 10000){
        shape.classList.toggle("gradient-75");
    }
    else{
        shape.classList.toggle("gradient-100");
    }
}
const navToggle = document.getElementById("toggle-bar");
navToggle.onclick = toggleNav;

const exerciseToggle1 = document.getElementById("second-exercise");
exerciseToggle1.onclick = toggleExercise2;


const exerciseToggle2 = document.getElementById("first-exercise");
exerciseToggle2.onclick = toggleExercise1;

const compareResults = document.getElementById("btn-compare");
compareResults.onclick = findOldest;

const displayGradient = document.getElementById("btn-display");
displayGradient.onclick = fillGradient;