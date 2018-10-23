const Problem = require('../Problem.js')

/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem30 = new Problem(
  30,
  function () {
    let tot = 0
    const sumFifths = (n) => {
      let sum = 0
      for (let c of n.toString()) {
        sum += c ** 5
      }
      return sum
    }

    for (let i = 2; i < 5 * 10 ** 5; i++) {
      if (sumFifths(i) === i) { tot += i }
    }
    return tot
  }
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem31 = new Problem(
  31,
  function () {
    let ways = 0
    for (let i = 200; i >= 0; i -= 200) {
      for (let j = i; j >= 0; j -= 100) {
        for (let k = j; k >= 0; k -= 50) {
          for (let m = k; m >= 0; m -= 20) {
            for (let n = m; n >= 0; n -= 10) {
              for (let o = n; o >= 0; o -= 5) {
                for (let p = o; p >= 0; p -= 2) {
                  ways++
                }
              }
            }
          }
        }
      }
    }
    return ways
  }
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem32 = new Problem(
  32,
  function () {
    let li = []
    const isPandigital = (n) => {
      let st = n.join('')
      if (st.length !== 9) { return false }
      for (var i = 9; i >= 1; i--) {
        if (!st.includes(i)) { return false }
      }
      return true
    }

    for (var i = 1; i < 9 ** 4; i++) {
      for (var j = i; j < 9 ** 4; j++) {
        if ([i, j, i * j].join('').length > 9) { break }
        if (isPandigital([i, j, i * j]) && !li.includes(i * j)) {
          li.push(i * j)
        }
      }
    }
    return li.reduce((acc, e) => acc + e, 0)
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem33 = new Problem(
  33,
  function () {},
  false
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem34 = new Problem(
  34,
  function () {
    let sum = 0
    const factorial = (i) => {
      if (i === 0) { return 1 }
      for (let j = i - 1; j > 1; j--) {
        i *= j
      }
      return i
    }
    const factsEqualOriginal = (i, digits) => {
      let sum = 0
      for (let d of digits) {
        sum += factorial(d)
        if (sum > i) { return false }
      }
      return sum === i
    }
    for (let i = 10; i < factorial(9); i++) {
      let digits = i.toString().split('').map(e => parseInt(e))
      if (factsEqualOriginal(i, digits)) {
        sum += i
      }
    }
    return sum
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem35 = new Problem(
  35,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem36 = new Problem(
  36,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem37 = new Problem(
  37,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem38 = new Problem(
  38,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem39 = new Problem(
  39,
  function () {},
  false
)

module.exports = [
  Problem30,
  Problem31,
  Problem32,
  Problem33,
  Problem34,
  Problem35,
  Problem36,
  Problem37,
  Problem38,
  Problem39
]
