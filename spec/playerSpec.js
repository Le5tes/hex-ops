describe("Player#units", [

  beforeCommands = [
    player = new Player
  ],

  it("should be an array",[
  	expect((player.units) instanceof Array).toEqual(true)
  ])

])
