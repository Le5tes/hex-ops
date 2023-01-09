class Interface {
  constructor(board = Board, boarddrawer = BoardDrawer) {
    this.board = new board()
    this.boardConverter = new BoardConverter(25)
    this.canvas = document.getElementById('game-board-canvas')
    this.unitDrawer = new UnitDrawer(this.canvas)
    this.spawnPoolDrawer = new SpawnPoolDrawer(this.canvas, this.unitDrawer)
    this.boardDrawer = new boarddrawer(this.boardConverter, this.canvas, this.unitDrawer)
    this.tileSelected = null
    this.unitSelected = null
  }

  setup() {
    this.board.generateTiles()
    this.player1 = new Player(this.board.tile(-4,0))
    this.player2 = new Player(this.board.tile(4,0))
    this.game = new Game([this.player1, this.player2])
    setTimeout(()=>{this.draw()},10) //this hacky setTimout is only here for testing/demonstrations
    this.canvas.addEventListener('click', (event) => {
      var x = event.pageX - this.canvas.offsetLeft
      var y = event.pageY - this.canvas.offsetTop
      this.clickevent(x, y)
    })
    var soldier = new Unit('tank', 1, 2, 1, 1, 'vehicle', 5, 3, this.board.tile(0,0), '1')
    this.board.tile(0,0).units = [soldier]
  }

  clickevent(x, y) {
    const coords = this.boardConverter.canvasToBoard(x, y)
    if (!this.tileSelected) {
      const tileSelected = this.board.tile(coords.x, coords.y)

      if (tileSelected.units[0]) {
        this.tileSelected = tileSelected
        console.log('tile selected')
      }
    } else if (!this.unitSelected) {
      this.unitSelected = this.tileSelected.units[0]
      console.log('unit selected')
    } else {
      console.log('moving')
      this.unitSelected.moveTo(this.board.tile(coords.x, coords.y))
      this.unitSelected = null
      this.tileSelected = null
      this.draw()
    }
  }

  draw() {
    this.boardDrawer.draw(this.board)
  }

}

interface = new Interface()

interface.setup()
interface.draw()
