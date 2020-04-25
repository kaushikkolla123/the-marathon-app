class Form{
	this.reset = createButton('Reset');
}
display(){
	this.reset.position(400,50);
}
this.reset.mousePressed(()=>{
athlete.updateCount(0);
game.update(0);
});