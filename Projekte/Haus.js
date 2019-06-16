var canvas = document.querySelector("canvas");
canvas.width= window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext("2d");


c.beginPath()
  c.moveTo(10, 90);
  c.lineTo (10, 50);
  c.lineTo(30, 30);
  c.lineTo(50, 50);
  c.lineTo(50, 90);
  c.lineTo(10, 50);
  c.lineTo(50, 50);
  c.lineTo(10, 90);
  c.lineTo(50, 90);
c.stroke();
