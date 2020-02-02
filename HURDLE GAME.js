var background,canvas
var gameState=0;
var playerCount;
var form,game,player;
var database

function setup()
{
    canvas=createCanvas(displayWidth,displayHeight);
    database=firebase.database();

    game=new Game();
    game.getState();
    game.start()
}

function draw()
{
    
}