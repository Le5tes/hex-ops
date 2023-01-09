var UNIT_RANGE_COUNTER_RESET = 0;
class Unit{
  constructor(name, vehicleAttack, infantryAttack, vehicleDefense, infantryDefense, unitType, movementRange, size = 1, tile, player){
    this.name = name;
    this.vehicleAttack = vehicleAttack;
    this.infantryAttack = infantryAttack;
    this.vehicleDefense = vehicleDefense;
    this.infantryDefense = infantryDefense;
    this.unitType = unitType;
    this.movementRange = movementRange;
    this.rangeCounter = UNIT_RANGE_COUNTER_RESET;
    this.size = size;
    this.tile = tile;
    this.player = player;
    this.img = new Image;
    this.img.src = `src/imgs/${this.name}.png`
  }

  moveTo(tile){
    if(this._canMoveTo(tile)){
      tile.add(this)
      this.tile.remove(this)
      this.tile = tile
      this.rangeCounter++
    }
  }

  _canMoveTo(tile){
    return this._isAdjacentTo(tile) &&
      (this.rangeCounter < this.movementRange) &&
      tile.canAccomodate(this)
  }

  _canAttack(tile){
    return this._isAdjacentTo(tile) && tile.units[0] && tile.units[0].player != this.player 
  }

  _isAdjacentTo(tile){
    return (Math.abs(this.tile.x - tile.x) <= 1) && (Math.abs(this.tile.y - tile.y) <= 1) && (Math.abs(this.tile.x - tile.x + this.tile.y - tile.y) <= 1) 
  }

  attackTile(tile){
    return this._canAttack(tile) ? tile.defend() : null
  }

  attackUnit(unit){
    if(unit.unitType === "vehicle"){
      return this.vehicleAttack;
    } else {
      return this.infantryAttack;
    }
  }

  defendAgainst(unit){
    if(unit.unitType === "vehicle"){
      return this.vehicleDefense;
    } else {
      return this.infantryDefense;
    }
  }

  die(){
    this.tile.remove(this);
    this.player.remove(this);
  }

  clone(){
    return Object.assign(new Unit(), this)
  }

  resetRangeCounter(){
    this.rangeCounter = UNIT_RANGE_COUNTER_RESET
  }
}
