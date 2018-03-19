class FakeUnit {
  constructor(size, atk = 0, player = 1) {
    this.size = size
    this.atk = atk
    this.player = player
  }

  attack() {
    return(this.atk)
  }

  defendAgainst() {
    return(this.atk)
  }

}
