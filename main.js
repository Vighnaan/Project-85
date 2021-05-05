canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2D");
car1_width=120;
car1_height=70;
background_image="cartoon-racing-track-quarter-mile-260nw-1223372944";
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car1_image="car2.png";
car1_x=10;
car1_y=100;
function add()
{
backgroundimageTag=new Image();
backgroundimageTag.onload=uploadBackground;
backgroundimageTag.src=background_image;
car1imageTag=new Image();
car1imageTag.onload=uploadcar1;
car1imageTag.src=car1_image;
car2imageTag=new Image();
car22imageTag.onload=uploadcar2;
car2imageTag.src=car2_image;
}
function uploadBackground()
{
    ctx.drawImage(backgroundimageTag, 0,0,canvas.width,canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1imageTag, car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2()
{
    ctx.drawImage(car2imageTag, car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        car1up();
        console.log("car1up")
    }
    if(keyPressed=="40")
    {
        car1down();
        console.log("car1down")
    }
    if(keyPressed=='37')
    {
        car1left();
        console.log("car1left")
    }
    if(keyPressed=='39')
    {
        car1right();
        console.log("car1right")
    }
    if(keyPressed=='87')
    {
        car2up();
        console.log("car2up")
    }
    if(keyPressed=="83")
    {
        car2down();
        console.log("car2down")
    }
    if(keyPressed=='65')
    {
        car2left();
        console.log("car2left")
    }
    if(keyPressed=='68')
    {
        car2right();
        console.log("car2right")
    }
}
function car1up()
{
    if(car1_y>=0)
    {
        car1_y=car1_y-10;
        console.log("when up arrow is pressed, x=" + car1_x + "y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1down()
{
    if(car1_y<=500)
    {
        car1_y=car1_y+10;
        console.log("when down arrow is pressed, x=" + car1_x + "y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1left()
{
    if(car1_x>=0)
    {
        car1_x=car1_x-10;
        console.log("when left arrow is pressed, x=" + car1_x + "y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1right()
{
    if(car1_x<=700)
    {
        car1_x=car1_x+10;
        console.log("when right arrow is pressed, x=" + car1_x + "y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2up()
{
    if(car2_y>=0)
    {
        car2_y=car2_y-10;
        console.log("when w key is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2down()
{
    if(car2_y<=500)
    {
        car2_y=car2_y+10;
        console.log("when s key is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2left()
{
    if(car2_x>=0)
    {
        car2_x=car2_x-10;
        console.log("when a key is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2right()
{
    if(car2_x<=700)
    {
        car2_x=car2_x+10;
        console.log("when d key is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
if(car1_x=700)
{
    console.log(car1Won)
    document.getElementById("game_status").innerHTML = "Car 1 Won !!";
    
}
else{
    console.log(car2Won)
    document.getElementById("game_status").innerHTML = "Car 2 Won !!";
}