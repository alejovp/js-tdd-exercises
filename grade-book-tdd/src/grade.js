function gradeBook (score1, score2, score3) { // eslint-disable-line no-unused-vars
  var avg = (score1 + score2 + score3) / 3
  if (score1 < 0 || score1 > 100) {
    return 'scores must be valid numbers between 0 and 100'
  }
  if (score2 < 0 || score2 > 100) {
    return 'scores must be valid numbers between 0 and 100'
  }
  if (score3 < 0 || score3 > 100) {
    return 'scores must be valid numbers between 0 and 100'
  }

  if (avg >= 90 && avg <= 100) {
    return 'A'
  } else if (avg >= 80 && avg < 90) {
    return 'B'
  } else if (avg >= 70 && avg < 80) {
    return 'C'
  } else if (avg >= 60 && avg < 70) {
    return 'D'
  } else {
    return 'F'
  }
}
