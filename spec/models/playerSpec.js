function MockTile(){
  this.units = []
}
function MockUnit() {
  this.tile = 'not a tile'
}
MockTile.prototype.add = function(unit){
  this.units.push(unit)
}

beforeEach(function(){
  fakeUnit = new MockUnit();
  fakeUnitNotUse = new MockUnit();
  startTile = new MockTile()
  player = new Player(startTile,[fakeUnit])
})

console.log(player.spawnPool)
describe("Player#units", [
  it("should be an array", [
  	expect((player.units) instanceof Array).toEqual(true)
  ])
])
describe("Player#spawn", [
  it("adds the unit to the starting tile", [
  	player.spawn(fakeUnit),
  	expect(startTile.units).toContain(fakeUnit)
  ]),
  it("sets the unit's tile to the spawn tile", [
    player.spawn(fakeUnit),
    expect(fakeUnit.tile).toEqual(startTile)
  ]),
  it("will only spawn things from the spawnpool", [
  	player.spawn(fakeUnitNotUse),
  	dont(expect(startTile.units).toContain("Thing I don't have to spawn"))
  ]),
  it("removes the unit from the spawnpool", [
  	player.spawn(fakeUnit),
  	dont(expect(player.spawnPool).toContain(fakeUnit))
  ])
])