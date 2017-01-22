/* function fizzBuzz () { // eslint-disable-line no-unused-vars
  var resultArray = []
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArray[i - 1] = 'FizzBuzz'
    } else if (i % 3 === 0) {
      resultArray[i - 1] = 'Fizz'
    } else if (i % 5 === 0) {
      resultArray[i - 1] = 'Buzz'
    } else {
      resultArray[i - 1] = i
    }
  }
  return resultArray
} */

// Using high order functions
function fizzBuzz () { // eslint-disable-line no-unused-vars
  // var resultArray = Array.apply(null, {length: 100})
  var resultArray = []
  for (var i = 0; i < 100; i++) {
    resultArray[i] = i + 1
  }
  function checkNumber (num) { // eslint-disable-line no-unused-vars
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz'
    } else if (num % 3 === 0) {
      return 'Fizz'
    } else if (num % 5 === 0) {
      return 'Buzz'
    } else {
      return num
    }
  }

  return resultArray.map(checkNumber)
}
