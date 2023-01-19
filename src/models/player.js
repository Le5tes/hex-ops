class Player {
  constructor(startTile, spawnpool = []){
    this.units = [];
    this.spawnPool = spawnpool;
    this.startTile = startTile;
  }

  spawn(unit){
  	this.startTile.add(this.spawnPool.remove(unit));
    this.units.add(unit);
    unit.tile = this.startTile;
  }

  remove(unit){
    this.units.remove(unit);
  }

  endTurn(){
    this.units.forEach(unit => unit.resetRangeCounter())
  }
}
