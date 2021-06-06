var database
var canvas
var form,game,player
var gameState=0
var playerCount
var allPlayers;       //to store the name and distance travelled by all the 4 players
function setup(){
  canvas=createCanvas(400,400);
  //create a database inside the variable 'database' --> firebase.database()
   database=firebase.database()
   game = new Game();
   game.getState();
   game.wait();
 }
 
 
 function draw(){
   if(playerCount === 4){
     game.update(1);
   }
   if(gameState === 1){
     clear();
     game.play();
   }
 }