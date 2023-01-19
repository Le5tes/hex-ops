class BoardDrawer {

  constructor(boardConverter, canvas, unitDrawer){
  	this.converter = boardConverter
  	this.canvas = canvas
    this.context = this.setupContext(canvas);
    this.unitDrawer = unitDrawer;
  }

   drawHex(tile){
  	const coords = this.converter.boardToCanvas(tile.x,tile.y)
  	this.context.beginPath();
    this.context.moveTo(coords.x - this.converter.tileSize,coords.y);
    this.context.lineTo(coords.x - this.converter.tileSize / 2,coords.y - this.converter.tileShortAxis);
    this.context.lineTo(coords.x + this.converter.tileSize / 2,coords.y - this.converter.tileShortAxis);
    this.context.lineTo(coords.x + this.converter.tileSize,coords.y);
    this.context.lineTo(coords.x + this.converter.tileSize / 2,coords.y + this.converter.tileShortAxis);
    this.context.lineTo(coords.x - this.converter.tileSize / 2,coords.y + this.converter.tileShortAxis);
    this.context.closePath();
    this.context.fill()
    this.context.stroke()
    var text = "" + tile.x + "," + tile.y
    this.context.strokeText(text, coords.x - 8, coords.y + 2)
  }

  drawUnits(tile){
    const coords = this.converter.boardToCanvas(tile.x,tile.y)
    coords.x = Math.round(coords.x)
    coords.y = Math.round(coords.y)
    tile.units.forEach( (unit) => {
      this.unitDrawer.draw(unit, coords);
    });
  }

  draw(board){
    this.context.clearRect(0,0,this.canvas.with, this.canvas.height)
    for(var i = -board.size; i <= board.size; i++){
      for(var j = -board.size; j <= board.size; j++){
      	if(board.tile(i,j)){
      	  this.drawHex(board.tile(i,j))
          this.drawUnits(board.tile(i,j))
      	}
      }
    }
  }

  setupContext(canvas) {
    const context = canvas.getContext("2d");
  	context.fillStyle = "#00FF00";
    context.strokeStyle = "#000000";
    context.font = '10px Ariel';
    return context;
  }
}
