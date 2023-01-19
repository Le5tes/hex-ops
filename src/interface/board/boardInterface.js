class BoardInterface {
    constructor(boardDrawer, boardConverter) {
        this.boardDrawer = boardDrawer
        this.boardConverter = boardConverter
    }


  clickevent(x, y, player) {
    if (this.boardConverter.isOnBoard(x,y)){
      this.handleClickEvent(x,y, player)
    } else {
      console.log("outsideBoard")
    }
  }

  handleClickEvent(x,y, player) {
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