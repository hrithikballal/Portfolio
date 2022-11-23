var images=["images/myimage2.jpg","images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg","images/img7.jpg","images/img8.jpg","images/img9.jpg"];
count = 0;
function prev(){
    if(count>0){
    var pic = document.getElementById("img");
    count--;
    pic.src=images[count];
    }

}
function next()
{
    if(count<=8)
    {
        var pic =document.getElementById("img");
        count++;
        pic.src=images[count];
    }
}