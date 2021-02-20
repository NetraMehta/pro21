var canvas;
var edges;

var music;

var surface1;
var surface2;
var surface3;
var surface4;

var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(105, 575, 175, 50);
    surface1.shapeColor = "blue";

    surface2 = createSprite(302.5, 575, 175, 50);
    surface2.shapeColor = "brown";

    surface3 = createSprite(500, 575, 175, 50);
    surface3.shapeColor = "purple";

    surface4 = createSprite(697.5, 575, 175, 50);
    surface4.shapeColor = "green";

    box = createSprite(Math.round(random(100, 700)), -50, 50, 50);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 6;

    edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));

    box.bounceOff(edges);

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
    }

    if(surface2.isTouching(box)){
        box.shapeColor = "brown";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "purple";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green";
    }
    
    music.loop();

    drawSprites();
}