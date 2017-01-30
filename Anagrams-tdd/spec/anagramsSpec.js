
describe('A function "anagrams" that', function () {
  it('Should exist', function () {
    expect(anagrams).toBeDefined()
  })

  it('Should receive only one parameter (String) and an optional accumulator', function () {
    var result = anagrams.length
    expect(result).toEqual(2)
  })

  it('Should return an Array', function () {
    var result = anagrams()
    expect(result instanceof Array).toBeTruthy()
  })

  describe('The returned Array should contain:', function () {
    it('Nothing when anagrams("") or anagrams() is called', function () {
      var result1 = anagrams()
      var result2 = anagrams('')
      expect(result1).toEqual([])
      expect(result2).toEqual([])
    })

    it('Just the [input] for an input string of length 1: anagrams("x") = ["x"]', function () {
      var result = anagrams('c')
      expect(result).toEqual(['c'])
    })

    it('Two potential words for an input string of length 2: anagrams("si") = ["si", "is"]', function () {
      var result = anagrams('si')
      expect(result.length).toEqual(2)
    })

    it('Six potential words for an input string of length 3: anagrams("sol") = ["sol", "slo", "osl", "ols", "lso", "los"]', function () {
      var result = anagrams('sol')
      expect(result).toEqual(['sol', 'slo', 'osl', 'ols', 'lso', 'los'])
    })

    it('Twenty four potential words for an input string of length 4: anagrams("hola") = ["hola", "hoal", "hloa", "hlao", "haol", "halo", "ohla", "ohal", "olha", "olah", "oahl", "oalh", "lhoa", "lhao", "loha", "loah", "laho", "laoh", "ahol", "ahlo", "aohl", "aolh", "alho", "aloh"]', function () {
      var result = anagrams('hola')
      expect(result).toEqual(['hola', 'hoal', 'hloa', 'hlao', 'haol', 'halo', 'ohla', 'ohal', 'olha', 'olah', 'oahl', 'oalh', 'lhoa', 'lhao', 'loha', 'loah', 'laho', 'laoh', 'ahol', 'ahlo', 'aohl', 'aolh', 'alho', 'aloh'])
    })
  })
})
