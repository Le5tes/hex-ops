class Game {
  constructor(player){
  	this.players = arguments
  	this._turnCounter = 0
  }
  
  turn(){
  	return this.players[this._turnCounter]
  }

  nextTurn(){
  	this._turnCounter +=1 
  	if (this._turnCounter >= this.players.length){
  	  this._turnCounter = 0
  	}
  }
}