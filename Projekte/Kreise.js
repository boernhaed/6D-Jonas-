var canvas = document.querySelector("canvas");
var width = window.innerWidth;
canvas.width= width;
var height= window.innerHeight;
canvas.height=height;
function randomcircle() {

var x= Math.random() * width;
var y= Math.random()* height;
var r = 20 + Math.random()* 30
var red= Math.random()*250;
var g=Math.random()*250;
var b= Math.random()*250;
var c = canvas.getContext("2d");

c.beginPath();
c.lineWidth=4;
c.arc(x, y, r, 0, Math.PI*2);
c.fillStyle= "rgb("+red+", "+g+" ,"+b+")";
c.fill()

var red= Math.random()*250;
var g=Math.random()*250;
var b= Math.random()*250;

c.strokeStyle = "rgb("+red+", "+g+" ,"+b+")";
c.stroke();
}
setInterval(randomcircle, 150);
