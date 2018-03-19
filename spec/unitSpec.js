function Mocktile(){
  this.units = []
}
Mocktile.prototype.add = function(unit){ this.units.push(unit) }
Mocktile.prototype.remove = function(unit){ this.units.remove(unit) }
Mocktile.prototype.defend = function(){
  return this.units[0]
 }
Mocktile.prototype.canAccomodate = function() {return true}

beforeEach(function(){
  fakeTile = new Mocktile()
  fakeTile.x = 0
  fakeTile.y = 0
  fakeTile2 = new Mocktile()
  fakeTile2.x = 1
  fakeTile2.y = -1
  fakeTile3 = new Mocktile()
  fakeTile3.x = 1
  fakeTile3.y = 1
  var fakePlayer = []
  test_soldier = new Unit('soldier', 1, 2, 1, 2, 'infantry', 2, 1, fakeTile, fakePlayer)
  test_tank = new Unit('tank', 2, 2, 1, 2, 'vehicle', 4, 3, 'n/a', 'n/a')
  fakeTile.add(test_soldier)
  fakePlayer.add(test_soldier)
  function func() { return test_tank.attackTile(fakeTile) }
  testAttack = func.bind(fakeTile)
})

describe("Unit#size", [
  it("should be a default of 1 if not defined", [
    expect(new Unit('unit', 1, 1, 1, 1, 'unit', 1, undefined,'none', 'none').size).toEqual(1)
  ])
])

describe("Unit#moveTo",[
  it("should add the unit to the new tile",[
    test_soldier.moveTo(fakeTile2),
    expect(fakeTile2.units).toContain(test_soldier)
  ]),
  it("should remove it from the old tile",[
    test_soldier.moveTo(fakeTile2),
    dont(expect(fakeTile.units).toContain(test_soldier))
  ]),
  it("shouldn't be able to move to tiles that are not adjacent",[
    test_soldier.moveTo(fakeTile3),
    dont(expect(fakeTile3.units).toContain(test_soldier))
  ]),
  it("should not move unit if that would exceed unit movement range", [
    test_soldier.moveTo(fakeTile2),
    test_soldier.moveTo(fakeTile),
    test_soldier.moveTo(fakeTile2),
    expect(fakeTile.units).toContain(test_soldier)
  ]),
  it("successful moves increment rangeCounter by 1",[
    test_soldier.moveTo(fakeTile2),
    expect(test_soldier.rangeCounter).toEqual(1)
  ]),
  it("won't move to a tile that can't accommodate it",[
    fakeTile2.canAccomodate = function(){ return false},
    test_soldier.moveTo(fakeTile2),
    dont(expect(fakeTile2.units).toContain(test_soldier))
  ])
])

describe("Unit#attackTile", [
  it("returns a defending unit when a unit attacks a tile",[
    expect(testAttack()).toEqual(test_soldier)
  ])
  // it("units cannot attack tiles they are on",[
  //   test_soldier.attackTile(fakeTile),
  //   expect("some error code executed")
  // ])
])

describe("Unit#attackUnit", [
  it("returns the unit's vehicle attack when attacking a vehicle",[
    expect(test_soldier.attackUnit(test_tank)).toEqual(1)
  ]),
  it("returns the unit's infantry attack when attacking an infantry unit", [
    expect(test_soldier.attackUnit(test_soldier)).toEqual(2)
  ])
])

describe("Unit#defendAgainst", [
  it("returns the unit's infantry defense when being attacked by an infantry unit", [
    expect(test_soldier.defendAgainst(test_soldier)).toEqual(2)
  ]),
  it("returns the unit's vehicle defense when being attacked by a vehicle", [
    expect(test_soldier.defendAgainst(test_tank)).toEqual(1)
  ])
])

describe("Unit#die", [
  it("unit should be removed from the tile and player's array", [
    expect(fakeTile.units.length).toEqual(1),
    test_soldier.die(),
    expect(fakeTile.units.length).toEqual(0)
  ])
])

describe("Unit#resetRangeCounter", [
  it("unit range counter can be reset", [
    test_soldier.moveTo(fakeTile2),
    test_soldier.resetRangeCounter(),
    expect(test_soldier.rangeCounter).toEqual(0)
  ])
])

describe("Unit#clone",[
  it("makes a duplicate of the unit",[
    clone = test_soldier.clone(),
    expect(clone.name).toEqual('soldier')
  ]),
  it("the clone should not be the same object",[
    clone = test_soldier.clone(),
    clone.name = 'clone',
    dont(expect(test_soldier.name).toEqual('clone'))
  ])
])