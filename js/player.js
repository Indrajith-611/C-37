/*
1. read / get playerCount --> getCount()
2. update the playerCount in the database --> updateCount(count)
3. update the name and distance of the players --> update()
*/


class Player{
    constructor(){          //properties --> name, distance, index (p1,p2,p3,p4 - individual players)
        this.name = null;
        this.distance=0;
        this.index = null;
    }
    getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
        
        playerCount = data.val()
    })
    }
    
    update(count){
        database.ref('/').update({
            playerCount : count
        })

    }

    update(){
        var playerIndex = "players/player"+this.index // if PlayerCount is 2, playerIndex = player2

        //fill the names of the playerName
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
        })
        }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val()
        })
    }

    }