const Problem = require('../Problem.js')
const BigNum = require('bignumber.js')
BigNum.config({ DECIMAL_PLACES: 50, EXPONENTIAL_AT: 1e+8 })

/**
* Unsolved
* @type {Problem}
*/
const Problem80 = new Problem(
  80,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem81 = new Problem(
  81,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem82 = new Problem(
  82,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem83 = new Problem(
  83,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem84 = new Problem(
  84,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem85 = new Problem(
  85,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem86 = new Problem(
  86,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem87 = new Problem(
  87,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem88 = new Problem(
  88,
  function () {}, false
)
/**
* Solved 2018-11-06
* @type {Problem}
*/
const Problem89 = new Problem(
  89,
  function () {
    const numToRoman = (n) => {
      let lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
      let roman = ''
      Object.keys(lookup).forEach(k => {
        while (n >= lookup[k]) {
          roman += k
          n -= lookup[k]
        }
      })
      return roman
    }
    const romanToNum = (roman) => {
      let lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
      let n = 0
      Object.keys(lookup).forEach(k => {
        while (roman.indexOf(k) === 0) {
          n += lookup[k]
          roman = roman.replace(k, '')
        }
      })
      return n
    }
    let numerals = this.loadResources()
    let tot = 0

    for (let n of numerals) {
      let val = romanToNum(n)
      let opt = numToRoman(val)
      let sav = n.length - opt.length
      tot += sav
    }
    return tot
  }, false
)

module.exports = [
  Problem80,
  Problem81,
  Problem82,
  Problem83,
  Problem84,
  Problem85,
  Problem86,
  Problem87,
  Problem88,
  Problem89
]
