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
  () => {
    let nums = [
      [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
      [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
      [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
      [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
      [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
      [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
      [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
      [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
      [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
      [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
      [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
      [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
      [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
      [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
      [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
      [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
      [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
      [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
      [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
      [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
    ]
    let largest = 0
    let buffer = 0
    let slen = 4

    for (let y = 0; y < nums.length - slen; y++) {
      for (let x = 0; x < nums.length - slen; x++) {
        buffer = nums[y].slice(x, x + 4).reduce((acc, e) => acc * e)
        if (buffer > largest) { largest = buffer }
        buffer = nums.slice(y, y + 4).map(e => e[x]).reduce((acc, e) => acc * e)
        if (buffer > largest) { largest = buffer }
      }
    }

    for (let y = 3; y < nums.length - slen; y++) {
      for (let x = 0; x < nums.length - slen; x++) {
        buffer = nums[y][x] * nums[y - 1][x + 1] * nums[y - 2][x + 2] * nums[y - 3][x + 3]
        if (buffer > largest) { largest = buffer }
      }
    }

    return largest
  }
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

      for (let j = 0; j <= Math.ceil(Math.sqrt(sum)); j++) {
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

    for (let i = 1; i < 1000000; i++) {
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
    for (let i = 1; i <= 1000; i++) {
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
