testBoard = new Board

boardToString = function(board){
 return board.tiles.map(function(arr){
  return "[" + arr.map(function(tile){
   if(tile){
    return'X'
   } else {
    return 'O'
   }
  }).toString()+"]"}).toString()
}
hexBoard ='[,,,,X,X,X,X,X],' +
          '[,,,X,X,X,X,X,X],' +
          '[,,X,X,X,X,X,X,X],' +
          '[,X,X,X,X,X,X,X,X],' +
          '[X,X,X,X,X,X,X,X,X],' +
           '[X,X,X,X,X,X,X,X,],' +
            '[X,X,X,X,X,X,X,,],' +
             '[X,X,X,X,X,X,,,],' +
              '[X,X,X,X,X,,,,]'

describe("Board#tile", [
  it("should return an element in the tiles array, using co-ords centred on the board size", [
    testBoard.tiles[4][4] = 5,
    expect(testBoard.tile(0,0)).toEqual(5)
  ]),
])

describe("Board#generateTiles", [
  it("generates a set of tiles that map to a hexagonal design", [ 
    testBoard.generateTiles(),
    expect(boardToString(testBoard)).toEqual(hexBoard) 
  ])
])

describe("Board#determineWinner", [
  it("should return attacker if defender was slain", [
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
  ]),

  it("should call random", [
    randomCalled = false,
    testBoard.rollDice(1, QuickMath),
    expect(randomCalled).toEqual(true)
  ])

])
