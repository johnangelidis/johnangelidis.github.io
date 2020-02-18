function displayP(){
    let artist = document.getElementById("txt-artist").value;
    let song = document.getElementById("txt-song").value;
    
    const firstError = isBlank(artist, "error-artist");
    const secondError = isBlank(song, "error-song");

    if(firstError||secondError) return;

    document.getElementById("result").innerHTML=`You like ${song} by ${artist}`;

}

function isBlank(data, errorSpanId){
    if(data.trim()==""){
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayP;