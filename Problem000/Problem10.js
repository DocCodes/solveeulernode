const Problem = require('../Problem.js')
const BigInt = require('big-integer')

/**
* Solved 2018-10-17
* @type {Problem}
*/
const Problem10 = new Problem(
  10,
  () => {
    let sum = 0
    let pr = true
    for (let i = 2; i < 2000000; i++) {
      pr = true
      for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
        if (i % j === 0) {
          pr = false
          break
        }
      }
      if (pr) { sum += i }
    }
    return sum
  }
)

/**
* Unsolved
* @type {Problem}
*/
const Problem11 = new Problem(
  11,
  () => {},
  false
)
/**
* Solved 2018-10-17
* @type {Problem}
*/
const Problem12 = new Problem(
  12,
  () => {
    let i = 1
    while (true) {
      let sum = i * (++i) / 2
      let divCnt = 0

      for (var j = 0; j <= Math.ceil(Math.sqrt(sum)); j++) {
        if (sum % j === 0) { divCnt += 2 }
        if (j ** 2 === i) { divCnt-- }
        if (divCnt > 500) { return sum }
      }
    }
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem13 = new Problem(
  13,
  () => {},
  false
)
/**
* Solved 2018-10-18
* @type {Problem}
*/
const Problem14 = new Problem(
  14,
  () => {
    let lonSeq = 0
    let lonLen = 0
    let curLen = 0
    let n = 0

    for (var i = 1; i < 1000000; i++) {
      curLen = 0
      n = i
      while (n !== 1) {
        n = n % 2 === 0 ? n / 2 : 3 * n + 1
        curLen++
      }
      if (curLen > lonLen) {
        lonSeq = i
        lonLen = curLen
      }
    }
    return lonSeq
  }
)
/**
* Solved 2018-10-18
* @type {Problem}
*/
const Problem15 = new Problem(
  15,
  () => {
    let gridSize = 20
    let paths = 1

    for (let i = 0; i < gridSize; i++) {
      paths *= (2 * gridSize) - i
      paths /= i + 1
    }
    return paths
  }
)
/**
* Solved 2018-10-18
* @type {Problem}
*/
const Problem16 = new Problem(
  16,
  () => {
    let num = BigInt(2).pow(1000)
    return num.toString().split('').map(e => parseInt(e)).reduce((acc, e) => acc + e)
  }
)
/**
* Solved 2018-10-18
* @type {Problem}
*/
const Problem17 = new Problem(
  17,
  () => {
    let sum = 0
    let ones = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
    }
    const tens = {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety'
    }
    for (var i = 1; i <= 1000; i++) {
      let parts = []
      let n = i
      if (n >= 1000) {
        parts = [...parts, ones[Math.floor(n / 1000)], 'thousand']
        n %= 1000
      }
      if (n >= 100) {
        parts = [...parts, ones[Math.floor(n / 100)], 'hundred', n % 100 !== 0 ? 'and' : '']
        n %= 100
      }
      if (n >= 20) {
        parts.push(tens[Math.floor(n / 10)])
        n %= 10
      }
      if (ones[n]) {
        parts.push(ones[n])
      }
      sum += parts.join('').length
    }
    return sum
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem18 = new Problem(
  18,
  () => {},
  false
)
/**
* Solved 2018-10-18
* @type {Problem}
*/
const Problem19 = new Problem(
  19,
  () => {
    let d = new Date(1901, 0, 1)
    let sunCount = 0
    while (d.getFullYear() < 2001) {
      if (d.getDay() === 0) { sunCount++ }
      d = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate())
    }
    return sunCount
  }
)

module.exports = [
  Problem10,
  Problem11,
  Problem12,
  Problem13,
  Problem14,
  Problem15,
  Problem16,
  Problem17,
  Problem18,
  Problem19
]
