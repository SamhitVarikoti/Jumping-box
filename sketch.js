var canvas;
var music;
var rect1,rect2,rect3,rect4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    rect1 = createSprite(50,590,150,20);
    rect1.shapeColor = "green";
    rect2 = createSprite(250,590,150,20);
    rect2.shapeColor = "red";
    rect3 = createSprite(450,590,150,20);
    rect3.shapeColor = "blue";
    rect4 = createSprite(650,590,150,20);
    rect4.shapeColor = "yellow";
    box = createSprite(random(20,750),100,20,20);
    box.shapeColor = "white";
    box.velocityX = 2;
    box.velocityY = 4;
    edges = createEdgeSprites();
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    if(rect1.isTouching(box) && box.bounceOff(rect1)){
      box.shapeColor = "green";
      music.play();
    }
    if(rect2.isTouching(box) && box.bounceOff(rect2)){
        box.shapeColor = "red";
        music.play();
      }
      if(rect3.isTouching(box) && box.bounceOff(rect3)){
        box.shapeColor = "blue";
        music.play();
      }
      if(rect4.isTouching(box) && box.bounceOff(rect4)){
        box.shapeColor = "yellow";
        music.play();
      }

    box.bounceOff(edges);
    

    //add condition to check if box touching surface and make it box
    drawSprites();
}
