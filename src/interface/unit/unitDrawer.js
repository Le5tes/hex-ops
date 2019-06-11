class UnitDrawer {
    constructor (canvas) {
        this.context = canvas.getContext("2d");
    }

    draw(unit, coords) {
        this.context.drawImage(unit.img, coords.x - 10, coords.y - 8)
    }
}