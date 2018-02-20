describe("Board#determineWinner", [

  beforeCommands = [
    testBoard = new Board
  ],

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

  beforeCommands = [
    testBoard = new Board
  ],

  it("should return an integer", [
    expect(Number.isInteger(testBoard.rollDice(4))).toEqual(true)
  ]),

  it("should call random", [
    randomCalled = false,
    testBoard.rollDice(1, QuickMath),
    expect(randomCalled).toEqual(true)
  ])

])
