var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

//mouseDown, mouseLeave, mouseUp, mouseMove
var mouseEvent = "empty";
var oldX = 0;
var oldY = 0;


canvas.addEventListener("mousedown",MouseDown);
function MouseDown(e)
{
    mouseEvent = "mouseDown"; 
    Color = document.getElementById("Color_of_line").value;
    Width = document.getElementById("Width_of_line").value;
}

canvas.addEventListener("mouseup",MouseUp);
function MouseUp(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave",MouseLeave);
function MouseLeave(e)
{
    mouseEvent = "mouseleave"
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_mouse_x = e.touches[0].clientY - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = Color;
    ctx.lineWidth = Width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("mousemove", my_mousemove);
function  my_mousemove(e)
{
     current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
     if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = Color;
        ctx.lineWidth = Width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + " y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
     }
     
 last_position_of_x= current_position_of_mouse_x;
 last_position_of_y= current_position_of_mouse_y;
 
 }
