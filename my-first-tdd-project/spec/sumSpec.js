describe('a function sum that', function () {
  it('should exist', function () {
    expect(sum).toBeDefined()
  })

  it('should rerturn a number', function () {
    var result = sum(2, 3)
    expect(typeof result).toEqual('number')
  })

  it('should rerturn 5 when sum(2,3)', function () {
    var result = sum(2, 3)
    expect(result).toEqual(5)
  })

  it('should rerturn 10 when sum(7,3)', function () {
    var result = sum(7, 3)
    expect(result).toEqual(10)
  })

  it('should rerturn 10 when sum("7",3)', function () {
    var result = sum('7', 3)
    expect(result).toEqual(10)
  })

  it('should rerturn 10 when sum("7","3")', function () {
    var result = sum('7', '3')
    expect(result).toEqual(10)
  })
})
