const Problem = require('../Problem.js')
const BigNum = require('bignumber.js')
BigNum.config({ DECIMAL_PLACES: 50, EXPONENTIAL_AT: 1e+9 })

/**
* Unsolved
* @type {Problem}
*/
const Problem90 = new Problem(
  90,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem91 = new Problem(
  91,
  function () {}, false
)
/**
* Solved 2018-11-02
* @type {Problem}
*/
const Problem92 = new Problem(
  92,
  function () {
    const squareMove = (n) => { return n.toString().split('').reduce((acc, e) => acc + parseInt(e) ** 2, 0) }
    let tot = 0

    for (let i = 2; i < 10000000; i++) {
      let n = squareMove(i)
      do {
        if (n === 1 || n === 89) { break }
        n = squareMove(n)
      } while (true)
      if (n === 89) { tot++ }
    }
    return tot
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem93 = new Problem(
  93,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem94 = new Problem(
  94,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem95 = new Problem(
  95,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem96 = new Problem(
  96,
  function () {}, false
)
/**
* Solved 2018-11-02
* @type {Problem}
*/
const Problem97 = new Problem(
  97,
  function () {
    let n = 2
    for (let i = 0; i < 7830456; i++) {
      n = (2 * n) % 10000000000
    }
    n *= 28433
    return ++n % 10000000000
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem98 = new Problem(
  98,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem99 = new Problem(
  99,
  function () {}, false
)

module.exports = [
  Problem90,
  Problem91,
  Problem92,
  Problem93,
  Problem94,
  Problem95,
  Problem96,
  Problem97,
  Problem98,
  Problem99
]
