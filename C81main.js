var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(300, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){


    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;

    circle (mouseX, mouseY)
}

function circle(mouseX, mouseY){

    ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
ctx.stroke();
}
