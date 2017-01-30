function anagrams (sInput, acc) { // eslint-disable-line no-unused-vars
  var sWord, aWords
  var result = []
  if (acc === undefined) {
    acc = ''
  }
  if (sInput === undefined || sInput.length === 0) {
    return result
  }
  if (sInput.length === 1) {
    return [sInput]
  }
  if (sInput.length === 2) {
    return [acc + sInput, acc + (sInput[1] + sInput[0])]
  }

  for (var i = 0; i < sInput.length; i++) {
    sWord = sInput.substr(0, i) + sInput.substr(i + 1)
    aWords = anagrams(sWord, acc + sInput[i])
    result = result.concat(aWords)
  }

  return result
}

