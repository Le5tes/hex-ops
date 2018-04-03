function MockPlayer(){}

beforeEach(function(){
	player1 = new MockPlayer()	
	player2 = new MockPlayer
	subject = new Game(player1, player2)
})

describe('game#turn',[
	it('returns whose turn it is',[
		expect(subject.turn()).toEqual(player1)
		])
	])

