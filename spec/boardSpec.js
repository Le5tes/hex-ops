testBoard = new Board

describe("Board#determineWinner", [
  it("should return attacker if defender was slain",[
    expect(testBoard.determineWinner(fakeAttacker = new FakeUnit(0,1),
    fakeDefender = new FakeUnit(0,0))).toEqual(fakeAttacker)
  ]),

  it("should return defender if attacker was slain", [
    expect(testBoard.determineWinner(fakeAttacker = new FakeUnit(0,0),
    fakeDefender = new FakeUnit(0,1))).toEqual(fakeDefender)
  ])

])

describe("Board#rollDice", [
  it("should return an integer", [
    expect(Number.isInteger(testBoard.rollDice(4))).toEqual(true)
  ])
])
