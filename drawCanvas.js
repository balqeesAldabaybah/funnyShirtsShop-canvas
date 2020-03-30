var canvas = document.getElementById("myCanvas");

var context = canvas.getContext('2d');

// begin custom shape
context.beginPath();

context.moveTo(35, 0);
context.lineTo(0, 35);
context.lineTo(0, 75);
context.lineTo(35, 75);
context.lineTo(35, 150);
context.lineTo(150, 150);
context.lineTo(150, 75);
context.lineTo(185, 75);
context.lineTo(185, 35);
context.lineTo(150, 0);
context.bezierCurveTo(70, 100, 35, 10, 35, 0);
// complete custom shape
context.closePath();
context.lineWidth = 3;

context.strokeStyle = 'white';
context.stroke();
