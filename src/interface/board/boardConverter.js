class BoardConverter {
  constructor(tileSize) {
    this.tileSize = tileSize
    this.tileShortAxis = Math.sqrt(1 - 0.5 ** 2) * tileSize
    this.startpointX = tileSize * 10
    this.startpointY = this.startpointX
  }

  boardToCanvas(x, y) {
    const x2 = x * this.tileSize * 1.5 + this.startpointX
    const y2 = (-y) * this.tileShortAxis * 2 - x * this.tileShortAxis + this.startpointY
    return { 'x': x2, 'y': y2 }
  }

  canvasToBoard(x, y) {
    const x2 = Math.round((x - this.startpointX) / (this.tileSize * 1.5))
    const y2 = Math.round(-(y - this.startpointY + (x2 * this.tileShortAxis)) / (this.tileShortAxis * 2))
    return { 'x': x2, 'y': y2 }
  }
}
