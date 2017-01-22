describe('a function sum that', function () {
  it('should exist', function () {
    expect(gradeBook).toBeDefined()
  })

  it('should return a string', function () {
    var result = gradeBook()
    expect(typeof result).toEqual('string')
  })

  it('should return "A" for 90 <= score <= 100', function () {
    var result = gradeBook(100, 100, 100)
    expect(result).toEqual('A')
  })

  it('should return "B" for 80 <= score < 90', function () {
    var result = gradeBook(80, 85, 87)
    expect(result).toEqual('B')
  })

  it('should return "C" for 70 <= score < 80', function () {
    var result = gradeBook(69, 72, 71)
    expect(result).toEqual('C')
  })

  it('should return "D" for 60 <= score < 70', function () {
    var result = gradeBook(60, 58, 63)
    expect(result).toEqual('D')
  })

  it('should return "F" for 0 <= score < 60', function () {
    var result = gradeBook(10, 10, 10)
    expect(result).toEqual('F')
  })

  it('should return an Error for scores above 100 or below 0', function () {
    var result = gradeBook(102, 10, 10)
    expect(result).toEqual('scores must be valid numbers between 0 and 100')
  })

  it('should return an Error for scores above 100 or below 0', function () {
    var result = gradeBook(86, -2, 10)
    expect(result).toEqual('scores must be valid numbers between 0 and 100')
  })
})
