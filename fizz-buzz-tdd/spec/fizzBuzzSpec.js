describe('a function sum that', function () {
  it('should exist', function () {
    expect(fizzBuzz).toBeDefined()
  })

  it('should return an array', function () {
    var result = fizzBuzz()
    expect(result instanceof Array).toBeTruthy()
  })

  it('should return an array of length 100', function () {
    var resultLength = fizzBuzz().length
    expect(resultLength).toEqual(100)
  })

  it('should return "Fizz" for an element mutiple of 3', function () {
    var result = fizzBuzz()
    var multiple = 6
    expect(result[multiple - 1]).toEqual('Fizz')
  })

  it('should return "Fizz" for an element mutiple of 3', function () {
    var result = fizzBuzz()
    var multiple = 33
    expect(result[multiple - 1]).toEqual('Fizz')
  })

  it('should return "Buzz" for an element mutiple of 5', function () {
    var result = fizzBuzz()
    var multiple = 50
    expect(result[multiple - 1]).toEqual('Buzz')
  })

  it('should return "Buzz" for an element mutiple of 5', function () {
    var result = fizzBuzz()
    var multiple = 95
    expect(result[multiple - 1]).toEqual('Buzz')
  })

  it('should return "FizzBuzz" for an element mutiple of both 3 and 5', function () {
    var result = fizzBuzz()
    var multiple = 15
    expect(result[multiple - 1]).toEqual('FizzBuzz')
  })

  it('should return "FizzBuzz" for an element mutiple of both 3 and 5', function () {
    var result = fizzBuzz()
    var multiple = 90
    expect(result[multiple - 1]).toEqual('FizzBuzz')
  })
})
