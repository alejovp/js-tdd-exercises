describe('a function that', function () {
  it('should exist', function () {
    expect(rockPaperScissors).toBeDefined()
  })

  it('should return a string', function () {
    var result = rockPaperScissors()
    expect(typeof result).toEqual('string')
  })

  it('should receive one or two parameters', function () {
    var args = rockPaperScissors.length
    expect(args).toEqual(2)
  })

  it('should return "SCISSORS Wins!" for inputs "PAPER" and "SCISSORS"', function () {
    var result = rockPaperScissors('PAPER', 'SCISSORS')
    expect(result).toEqual('SCISSORS Wins!')
  })

  it('should return "SCISSORS Wins!" for inputs "PAPER" and "ROCK"', function () {
    var result = rockPaperScissors('PAPER', 'ROCK')
    expect(result).toEqual('PAPER Wins!')
  })

  it('should return "SCISSORS Wins!" for inputs "PAPER" and "ROCK"', function () {
    var result = rockPaperScissors('PAPER')
    expect(result).toEqual('PAPER Wins!' || 'SCISSORS Wins!' || 'tie!')
  })
})
