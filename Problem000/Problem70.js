const Problem = require('../Problem.js')
const BigNum = require('bignumber.js')
BigNum.config({ DECIMAL_PLACES: 50, EXPONENTIAL_AT: 1e+9 })

/**
* Unsolved
* @type {Problem}
*/
const Problem70 = new Problem(
  70,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem71 = new Problem(
  71,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem72 = new Problem(
  72,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem73 = new Problem(
  73,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem74 = new Problem(
  74,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem75 = new Problem(
  75,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem76 = new Problem(
  76,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem77 = new Problem(
  77,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem78 = new Problem(
  78,
  function () {}, false
)
/**
* Solved 2018-11-01
* @type {Problem}
*/
const Problem79 = new Problem(
  79,
  function () {
    let pins = this.loadResources()
    let numbersUsed = Array.from(new Set(pins.join('').split(''))).sort()
    let code = new Array(numbersUsed.length).fill(0)

    for (let n of numbersUsed) {
      let bef = new Set()
      for (let p of pins) {
        if (p.indexOf(n) < 1) { continue }
        if (p.indexOf(n) === 2) { bef.add(p[1]) }
        bef.add(p[0])
      }

      for (let i = 0; i < code.length; i++) {
        if (bef.size === i) { code[i] = n }
      }
    }

    return code.join('')
  }
)

module.exports = [
  Problem70,
  Problem71,
  Problem72,
  Problem73,
  Problem74,
  Problem75,
  Problem76,
  Problem77,
  Problem78,
  Problem79
]
