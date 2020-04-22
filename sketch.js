var r = 0;
var g = 50;
var b=255;


var canvas1,canvas2,canvas3
var ball
function setup() {
  createCanvas(800,400);
 createSprite(560,300,10,400);  
 createSprite(760,300,10,400);
 createSprite(600,400,50,400);
 createSprite(720,400,50,400);
 createSprite(660,350,50,400);

}

function draw() {
  background(r,g,b);  
  r=map(mouseX,0,1200,0,255);
  g=map(mouseX,50,900,0,255);
  b=map(mouseX,100,600,0,255);
  fill("white")
  ellipse(mouseX,mouseY,10,10);

  fill("orange");
strokeWeight(5);
stroke("red");
ellipse(49,48, 80, 80);
stroke("brown");
strokeWeight(10);
line(394, 250, 300, 100);
line(300, 100, 199, 250);
line(231,198, 150, 100);
line(150, 101, 2, 250);
stroke("blue");
point(200, 200);
point(187, 211);
point(177, 220);
point(169, 230);
point(163, 241);
point(162, 256);
line(172, 278, 300, 396);
point(166, 269);
point(289, 200);
point(278, 215);
point(271, 230);
point(266, 240);
point(266, 251);
point(273, 259);
line(281, 264, 400, 400);
point(280, 263);
stroke("brown");


  drawSprites();
}