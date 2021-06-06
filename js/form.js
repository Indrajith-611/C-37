//create a class --> class ClassName{}
//dispaly the form --> display()
class Form{
    constructor(){          //properties of the class
        
        this.button = createButton('play')
        this.input = createInput('enter your name')
        this.greeting = createElement('h2')
    }

    display(){
//create an element inside the variable called title
var title = createElement('h1')
title.html("Car Racing Game")
title.position(130,0)

//create a button inside a variable called button
 this.button.position(130,160)

 //create an element inside a variable called greeting of size h2
 
 
 //create an input inside a variable called input
 
 this.input.position(120,120)

 //to click on a button to make changes --> var_Name.mousePressed()
 this.button.mousePressed(()=>{
     //hide the input, greeting and button --> var.hide()
     this.input.hide()
    this.button.hide()
    this.greeting.hide()

    //store the input(name) inside the player's name property
     player.name = this.input.value()

     //playerCount is increased
     playerCount = playerCount + 1

     player.index = playerCount;

     //update the name of the player in the database
     player.update()
     
     //update the playerCOunt inside the database
    player.update(playerCount)

    //greet the player with the word "hello"
    this.greeting.html("Hello " + player.name )
   this.greeting.position(130,100);

    })
}

}