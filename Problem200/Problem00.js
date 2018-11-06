const Problem = require('../Problem.js')
const BigNum = require('bignumber.js')
BigNum.config({ DECIMAL_PLACES: 50, EXPONENTIAL_AT: 1e+9 })

/**
* Unsolved
* @type {Problem}
*/
const Problem00 = new Problem(
  200,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem01 = new Problem(
  201,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem02 = new Problem(
  202,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem03 = new Problem(
  203,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem04 = new Problem(
  204,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem05 = new Problem(
  205,
  function () {}, false
)
/**
* Solved 2018-11-05
* @type {Problem}
*/
const Problem06 = new Problem(
  206,
  function () {
    let mn = Math.floor(Math.sqrt(1020304050607080900))
    let mx = Math.ceil(Math.sqrt(1929394959697989900))
    mx -= mx % 10
    const passesTest = (n) => {
      let st = BigNum(n).exponentiatedBy(2).toString().split('').filter((e, i) => i % 2 === 0)
      for (let i = 1; i < 10; i++) {
        if (st[i - 1] !== i.toString()) { return false }
      }
      return true
    }

    for (let i = mx; i > mn; i--) {
      if (i % 30 !== 0 || i % 70 !== 0) { continue }
      if (passesTest(i)) { return i }
    }
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem07 = new Problem(
  207,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem08 = new Problem(
  208,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem09 = new Problem(
  209,
  function () {}, false
)

module.exports = [
  Problem00,
  Problem01,
  Problem02,
  Problem03,
  Problem04,
  Problem05,
  Problem06,
  Problem07,
  Problem08,
  Problem09
]
