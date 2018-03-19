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
    this.img.src = `imgs/${this.name}.png`
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
    return (Math.abs(this.tile.x - tile.x + this.tile.y - tile.y) <= 1) &&
      (this.rangeCounter < this.movementRange) &&
      tile.canAccomodate(this)
  }

  attackTile(tile){
    return tile.defend()
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
