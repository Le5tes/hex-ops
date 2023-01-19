function MockPlayer(){
	this.turnEnded = false
	this.endTurn = () => this.turnEnded = true
}

beforeEach(function(){
	player1 = new MockPlayer()	
	player2 = new MockPlayer()
	subject = new Game(player1, player2)
})

describe('game#turn',[
	it('returns whose turn it is',[
		expect(subject.turn()).toEqual(player1)
		])
	])

describe('game#nextTurn',[
	it('increments whose turn it is',[
		subject.nextTurn(),
		expect(subject.turn()).toEqual(player2)
		]),
	it('loops back to the first player once all players have ahd a turn',[
		subject.nextTurn(),
		subject.nextTurn(),
		expect(subject.turn()).toEqual(player1)
		]),
	it('calls endTurn on the player', [
		subject.nextTurn(),
		expect(player1.turnEnded).toEqual(true)
		])
	])