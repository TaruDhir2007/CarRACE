class Form{
constructor(){
    this.input = createInput("ENTER YOUR NAME HERE")
    this.button = createButton("PLAY!!!");
    this.greeting = createElement("h1")
}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}
display(){
    var title = createElement("h1");
    title.html("CAR RACING GAME");
    title.position(250, 50);

    this.input.position(250, 250);
    this.button.position(250 , 300);
    this.button.mousePressed(() =>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount = playerCount + 1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);

    this.greeting.html("Hello " + player.name);
    this.greeting.position(250, 250);

    })  
}
}