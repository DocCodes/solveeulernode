const Problem = require('../Problem.js')

/**
* Solved 2018-10-25
* @type {Problem}
*/
const Problem40 = new Problem(
  40,
  function () {
    let bigNum = ''
    let prod = 1
    for (let i = 1; i < 5 * 10 ** 5; i++) {
      bigNum += i.toString()
    }
    for (let i = 1; i <= 1000000; i *= 10) {
      prod *= bigNum[i - 1]
    }
    return prod
  }
)
/**
* Solved 2018-10-25
* @type {Problem}
*/
const Problem41 = new Problem(
  41,
  function () {
    const isPandigital = (n) => {
      let st = n.toString()
      for (var i = st.length; i >= 1; i--) {
        if (!st.includes(i)) { return false }
      }
      return true
    }
    const isPrime = (n) => {
      let flr = Math.sqrt(n)
      for (let j = 2; j <= flr; j++) {
        if (n % j === 0) { return false }
      }
      return true
    }

    let lg = 0
    for (let i = 101; i < 10 ** 7; i += 2) {
      if (i.toString().length === 6) { continue }
      if (isPandigital(i) && isPrime(i)) {
        lg = i
      }
    }
    return lg
  }
)
/**
* Solved 2018-10-25
* @type {Problem}
*/
const Problem42 = new Problem(
  42,
  function () {
    const wordValue = (st) => { return st.split('').reduce((acc, e) => acc + alpha.indexOf(e) + 1, 0) }
    let triWords = 0
    let words = this.loadResources()
    let longestWord = Math.max(...words.map(e => e.length))
    let manyTri = new Array(longestWord * 2).fill(0).map((e, i) => ++i * (i + 1) / 2)
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    for (let w of words) {
      if (manyTri.includes(wordValue(w))) {
        triWords++
      }
    }

    return triWords
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem43 = new Problem(
  43,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem44 = new Problem(
  44,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem45 = new Problem(
  45,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem46 = new Problem(
  46,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem47 = new Problem(
  47,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem48 = new Problem(
  48,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem49 = new Problem(
  49,
  function () {},
  false
)

module.exports = [
  Problem40,
  Problem41,
  Problem42,
  Problem43,
  Problem44,
  Problem45,
  Problem46,
  Problem47,
  Problem48,
  Problem49
]
