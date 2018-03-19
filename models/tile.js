class Tile {
  constructor(capacity = 6, x = 0, y = 0){
  	this.CAPACITY = capacity;
  	this.units = [];
    this.x = x;
    this.y = y;
  };

  canAccomodate(unit){
   	return (this.spaceLeft() >= unit.size) && ( this.units[0] ? this.units[0].player == unit.player : true );
  };

  spaceLeft() {
    return (this.CAPACITY - this._unitSizes().sum());
  };

  add(unit){
    if (this.canAccomodate(unit)) {
      this.units.push(unit);
    };
  };

  remove(unit){
  	this.units.remove(unit);
  };

  //returns a random unit defending this tile, battle logic will be within it's
  //own class or within the board class initially.
  defend(mod = Math){
  	return (this.units[mod.floor(mod.random() * this.units.length)]);
  };

  _unitSizes(){
  	return (this.units.map(function(unit){return unit.size}));
  };
};
