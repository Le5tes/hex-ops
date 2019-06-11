class SpawnPoolDrawer {
  constructor(canvas, unitDrawer) {
    this.context = canvas.getContext('2d');
    this.unitDrawer = unitDrawer;
  }

  draw(spawnpool) {
    const spacing = 300 / spawnpool.length;
    spawnpool((unit, index) => {
      this.unitDrawer.draw(unit, {x: spacing * index, y: 500})
    });
  }
}
