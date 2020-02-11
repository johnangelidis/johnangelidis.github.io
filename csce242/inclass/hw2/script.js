var count=1;
function changeImage(){
    count++;
    if(count>=5)
    {
        count=1;
    }
    let image = document.getElementById("image1").src="images/image"+count+".png";

}