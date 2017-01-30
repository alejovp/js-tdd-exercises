function rockPaperScissors (value1, value2) {
  var randomNum = Math.floor(Math.random() * 2)
  var aValues = ['PAPER', 'SCISSORS', 'ROCK']
  if (value2 === undefined) {
    value2 = aValues[randomNum]
  }
  if (value1 === 'PAPER' && value2 === 'SCISSORS') {
    return 'SCISSORS Wins!'
  }
  if (value1 === 'PAPER' && value2 === 'ROCK') {
    return 'PAPER Wins!'
  }
  if (value1 === 'SCISSORS' && value2 === 'PAPER') {
    return 'SCISSORS Wins!'
  }
  if (value1 === 'SCISSORS' && value2 === 'ROCK') {
    return 'ROCK Wins!'
  }
  if (value1 === 'ROCK' && value2 === 'PAPER') {
    return 'PAPER Wins!'
  }
  if (value1 === 'ROCK' && value2 === 'SCISSORS') {
    return 'ROCK Wins!'
  }
  return 'tie!'
}
