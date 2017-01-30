// function anagrams (sInput, acc) { // eslint-disable-line no-unused-vars
//   var sWord, aWords
//   var result = []
//   if (acc === undefined) {
//     acc = ''
//   }
//   if (sInput === undefined || sInput.length === 0) {
//     return result
//   }
//   if (sInput.length === 1) {
//     return [sInput]
//   }
//   if (sInput.length === 2) {
//     return [acc + sInput, acc + (sInput[1] + sInput[0])]
//   }

//   for (var i = 0; i < sInput.length; i++) {
//     sWord = sInput.substr(0, i) + sInput.substr(i + 1)
//     aWords = anagrams(sWord, acc + sInput[i])
//     result = result.concat(aWords)
//   }

//   return result
// }

//* ******************************************************************

function anagrams (sInput, acc) { // eslint-disable-line no-unused-vars
  var sWord, aWords, inputL1, inputL2
  var result = []
  var oResult = {}
  if (sInput === undefined || sInput.length === 0) {
    return result
  }
  if (acc === undefined) {
    acc = ''
  }

  inputL1 = (sInput.length === 1)
  inputL2 = (sInput.length === 2 && sInput[0] === sInput[1])

  if (inputL1 || inputL2) {
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

  /* Turn an Array into an Object with elems as keys
  just to filter the repeated ones
  (Find a better solution) */

  result.forEach(function (elem) {
    oResult[elem] = null
  })

  // return oResult

  return Object.keys(oResult)
}
