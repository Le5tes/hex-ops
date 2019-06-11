class Board{
  constructor(size = 4, tileCapacity = 6){
  	this.size = size
  	this.tileCapacity = tileCapacity
  	this.tiles = new Array(size * 2 + 1).fill(0).map(function(){return new Array(size * 2 + 1)})
  }

  generateTiles(){
  	for(var x = -this.size; x <= this.size; x++){
  	  for(var y = -this.size; y<= this.size; y++){
  	    if(Math.abs(x+y) <= this.size){
  	      this._setTile(x,y, new Tile(this.tileCapacity,x,y))
  	    }
  	  }
  	}
  }

  _setTile(x,y,value){
  	(this.tiles[x+this.size])[y+this.size] = value
  }

  tile(x,y){
  	return this.tiles[x+this.size][y+this.size]
  }

  determineWinner(attacker, defender){
    return this.rollDice(attacker.attack(defender)) > this.rollDice(defender.defendAgainst(attacker)) ? attacker : defender
  }

  rollDice(numDice, mod = Math){
    return (Array(numDice).fill(0)).map(function(x){return mod.ceil(mod.random() * 6)}).sum()
  }
}
