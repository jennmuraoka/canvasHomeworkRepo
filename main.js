// -----------------------------------------------SETUP---------------------------------------------------------
// Global Variables~~~~~~~~~~~~~~~~~~
// querySelector lets you grab CSS things on page
var canvas = document.querySelector('canvas'); // grabbing canvas from ddocument and turning it into javascrip obj
var ctx = canvas.getContext('2d'); // where you will be drawing (draw on the context of the canvas)
var r = 100;
var mouseX = 0;
var mouseY = 0;

//Functions~~~~~~~~~~~~~~~~~~~~~~~~~~
// making the canvas the size of the browser window
function resizeCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function randX() {
  return Math.random() * canvas.width;
}

function randY() {
  return Math.random() * canvas.height;
}

function randColor() {
  var r = (Math.random() + 0.5) * 255;
  var g = (Math.random() + 0.5) * 255;
  var b = (Math.random() + 0.5) * 255;
  // return `rgb(${r}, ${g}, ${b})`; // ${variable} lets you inject variables into a string
  return 'rgba('+r+', '+g+', '+b+', 0.03)';
}

// e stands for event (the object the function calls; in this case the mouse's x and y values)
function updateMouseXY(e) {
  mouseX = e.x;
  mouseY = e.y;
}

function drawCuteFaces() {
  var x = canvas.width/2;
  var y = canvas.height/2;
  if (x == mouseX && y == mouseY) {
    x = 100;
    y = 100;
  }
  ctx.font = 'italic 15px Georgia';
  ctx.fillStyle = 'rgb(230, 70, 30)'; // fills anything with a fill
  ctx.strokeStyle = 'rgb(100,20,250)';
  ctx.fillText(' ◕*ﾟ✧', mouseX - 5, mouseY - 15);
  ctx.strokeText('✧･ﾟ', mouseX - 5, mouseY + 40);
}

function drawText() {
  var x = canvas.width/2 - 20;
  var y = canvas.height/2 + 40;
  ctx.font = 'italic 15px Georgia';
  ctx.fillStyle = 'blue';
  ctx.fillText('れんごく', x, y);
  for (i = 0; i < canvas.width; i++) {
    if (x == mouseX && y == mouseY) {
      x = x + i;
      y = y + i;
    }
  }
}

function drawCircle(x, y, r, startAngle, endAngle) {
  ctx.beginPath();
  ctx.arc(x, y, r, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}



window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', updateMouseXY); // listening for the mouse movement


resizeCanvas();


// --------------------------------------------DRAWING----------------------------------------------------------
// fillText takes 3 properties: the string, x/y coord in 4th coord section

function draw() {
  var xMiddle = canvas.width/2;
  var yMiddle = canvas.height/2;

  ctx.fillStyle = 'rgba(210,220,255, .6)'; // a is for alpha (transparency)
  //ctx.fillRect(0, 0, canvas.width, canvas.height); // filling canvas

  var rengoku = new Image();
  rengoku.src = 'https://78.media.tumblr.com/c27743354a53fb3342e73edadcb92055/tumblr_owf2yr7v4N1waopjco2_1280.png';
  ctx.drawImage(rengoku, xMiddle - 105, yMiddle - 60, 210, 120);


// CIRCLE DRAWING~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ctx.fillStyle = 'rgba(230,220,235, 0.1)';
  ctx.strokeStyle = 'rgba(230,220,235, 0.15)';
  ctx.beginPath();
  //var randStart = Math.random() * Math.PI;
  if (r < canvas.width) {
    r++;
    ctx.fillStyle = randColor();
    ctx.strokeStyle = 'rgba(0,0,255,.7)';
  } else if (r >= canvas.width) {
    r = 0;
    ctx.fillStyle = randColor();

  }
  drawCircle(xMiddle - 100, yMiddle - 100, r, 0, Math.PI/2);
  drawCircle(xMiddle - 100, yMiddle - 100, r, Math.PI, 0);
  drawCircle(xMiddle - 100, yMiddle - 100, r, 0, Math.PI);
  drawCircle(xMiddle - 100, yMiddle - 100, r, Math.PI, Math.PI*3/2);

  drawCircle(xMiddle + 100, yMiddle + 100, r, 0, Math.PI/2);
  drawCircle(xMiddle + 100, yMiddle + 100, r, Math.PI, 0);
  drawCircle(xMiddle + 100, yMiddle + 100, r, 0, Math.PI);
  drawCircle(xMiddle + 100, yMiddle + 100, r, Math.PI, Math.PI*3/2);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

drawCuteFaces();
drawText();

// var clouds = new Image();
// clouds.src = 'http://media.giphy.com/media/2axKIS1g9zR1S/giphy.gif';
// clouds.onload = function() {
//   for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 10; j++) {
//       ctx.drawImage(clouds, 100 * j, -1 * i, 300, 150);
//     }
//   }
// };

var blueFish = new Image();
blueFish.onload = function() {
  for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 65; j += 2) {
      ctx.drawImage(blueFish, 40 * j, -30 * i, 30, 25);
    }
  }
};
blueFish.src = 'https://orig00.deviantart.net/b9e3/f/2016/077/6/e/nimbus_by_fennecfoxaim-d9vjtzm.gif';

//ctx.drawImage(blueFish, canvas.width - 100, canvas.height - 100, 30, 25);

  requestAnimationFrame(draw); // smarter timeout made specifically for animation
}
draw();
