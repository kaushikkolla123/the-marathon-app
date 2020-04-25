var PLAY = 1;
var END = 0;
var athlete1;
var athlete2;
var athlete3;
var athlete4;
var track;
var athlete1_img;
var athlete2_img;
var athlete3_img;
var athlete4_img;
var track_img;
var invisibleGround;
var hurdle;
var hurdle_img;
function preload(){
track = loadImage("track.png");
athlete1_img = loadImage("athlete1.png");
athlete2_img = loadImage("athlete2.png");
athlete3_img = loadImage("athlete3.png");
athlete4_img = loadImage("athlete4.png");
track_img = loadImage("track.png");
hurdle_img = loadImage("hurdle.png");
}
function setup(){
createCanvas(1000,500);

athlete1 = createSprite(135,80,30,10);
athlete1.addImage("athlete1", athlete1_img);
athlete1.scale = 0.07;
athlete1.velocityX = 2;
stroke("yellow");
ellipse(135,80,30,10);

athlete2 = createSprite(135,150,30,10);
athlete2.addImage("athlete2", athlete2_img);
athlete2.scale = 0.018;
athlete2.velocityX =2;
stroke("blue");
ellipse(135,150,30,10);

athlete3 = createSprite(135,200,30,10);
athlete3.addImage("athlete3", athlete3_img);
athlete3.scale = 0.05;
athlete3.velocityX = 2;
stroke("green");
ellipse(2135,200,30,10);

athlete4 = createSprite(135,270,30,10);
athlete4.addImage("athlete4", athlete4_img);
athlete4.scale = 0.07;
athlete4.velocityX = 2;
stroke("red");
ellipse(135,270,30,10);

var invisibleGround = createSprite(500,115,1000,10);
invisibleGround.visible = false;

var invisibleGround = createSprite(500,175,1000,10);
invisibleGround.visible = false;

var invisibleGround = createSprite(500,235,1000,10);
invisibleGround.visible = false;

var invisibleGround = createSprite(500,295,1000,10);
invisibleGround.visible = false;

hurdle = createSprite(600,80,30,10);
hurdle.addImage("hurdle",hurdle_img);
hurdle.scale = 0.2;

hurdle = createSprite(600,150,30,10);
hurdle.addImage("hurdle",hurdle_img);
hurdle.scale = 0.2;

hurdle = createSprite(600,220,30,10);
hurdle.addImage("hurdle",hurdle_img);
hurdle.scale = 0.2;

hurdle = createSprite(600,270,30,10);
hurdle.addImage("hurdle",hurdle_img);
hurdle.scale = 0.2;

}
function draw(){
background(track);
drawSprites();
athlete1.collide(invisibleGround);
athlete2.collide(invisibleGround);
athlete3.collide(invisibleGround);
athlete4.collide(invisibleGround);
  if (gamestate === PLAY){
invisibleGround.velocityX = -6;
if (invisibleGround.x < 0){
invisibleGround.x = invisibleGround.width/2;
}
}
}