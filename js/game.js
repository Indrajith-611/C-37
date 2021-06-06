/*
1. read / get the gameState --> getState()
2. update the gameState --> update(state)
3. wait state --> wait()

*/


class Game{
    constructor(){
        
    }

    getState(){
        //refer to the gameState entry in the database --> database.ref()
        var gameStateRef = database.ref('gameState');

        //listen to the changes in the game --> var.on()
        gameStateRef.on("value",function(data){

            //store the listened info inside the gameState --> data.val()
            gameState = data.val()
        })

    }

    update(state){
        database.ref('/').update({
            gameState : state
        })
    }

    async wait(){
        if(gameState === 0){
            player = new Player();          // a new player is created
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }   
            form = new Form()           // a new form is displayed
            form.display();
          }
        }

          play(){

            //hide the form 
            form.hide();
            textSize(30);
            text("Game Start", 120, 100)
            Player.getPlayerInfo();
        
            if(allPlayers !== undefined){
              var display_position = 130;

              for(var plr in allPlayers){
                if (plr === "player" + player.index)
                  fill("red")
                else
                  fill("black");
        
                display_position+=20;
                textSize(15);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
              }
            }
        
            if(keyIsDown(UP_ARROW) && player.index !== null){
              player.distance +=50
              player.update();
            }
          }
        
    
}