testTile = new Tile

describe("Tile", [
  it("stores an array for units",[
  	expect((testTile.units) instanceof Array).toEqual(true)
  ]),

  it("has a default capacity of 6",[
    expect(testTile.CAPACITY).toEqual(6)
  ]),

  it("capacity can be set on construction of tile", [
    expect(new Tile(9).CAPACITY).toEqual(9)
  ]),

  it("have an x and y coordinate with a default value of 0", [
    expect(testTile.x === 0 && testTile.y === 0).toEqual(true)
  ])
])

describe("Tile#add", [
  it("can add a unit into the tile's unit array", [
    fakeUnit1 = new FakeUnit(1),
    testTile.add(fakeUnit1),
    expect(testTile.units).toContain(fakeUnit1)
  ]),

  it("cannot add a unit that is too large into the tile's unit array", [
    fakeUnit2 = new FakeUnit(8),
    testTile.add(fakeUnit2),
    dont(expect(testTile.units).toContain(fakeUnit2))
  ])
])

describe("Tile#spaceLeft", [
  it("returns the amount of used space", [
    expect(new Tile().spaceLeft()).toEqual(6)
  ])
])

describe("Tile#remove", [
  it("removes a unit from the tile's unit array", [
    fakeUnit3 = new FakeUnit(1),
    testTile.add(fakeUnit3),
    testTile.remove(fakeUnit3),
    dont(expect(testTile.units).toContain(fakeUnit3))
  ])
])

describe("Tile#canAccomodate", [
  it("returns true if the unit's size does not breach the capacity", [
    expect(testTile.canAccomodate(new FakeUnit(3))).toEqual(true)
  ]),

  it("returns false if the unit's size breaches the capacity", [
    expect(testTile.canAccomodate(new FakeUnit(10))).toEqual(false)
  ]),

  it("returns false if there is already a unit from a different player on the tile",[
    testTile.add(new FakeUnit(1)),
    expect(testTile.canAccomodate(new FakeUnit(1,1,2))).toEqual(false)
  ])
])

describe("Tile#defend", [
  it("returns a unit on the tile", [
    expect(testTile.defend() instanceof FakeUnit).toEqual(true)
  ]),

  //Will cause difficulties later on with other functions calling on Math.random
  it("Math.random should be called", [
    randomCalled = false,
    testTile.defend(QuickMath),
    expect(randomCalled).toEqual(true)
  ])
])
