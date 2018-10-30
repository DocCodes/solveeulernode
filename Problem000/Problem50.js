const Problem = require('../Problem.js')

/**
* Unsolved
* @type {Problem}
*/
const Problem50 = new Problem(
  50,
  function () {}
)
/**
* Unsolved
* @type {Problem}
*/
const Problem51 = new Problem(
  51,
  function () {}
)
/**
* Solved 2018-10-30
* @type {Problem}
*/
const Problem52 = new Problem(
  52,
  function () {
    let i = 1
    const isPermutation = (a, b) => {
      return a.toString().split('').sort().join('') === b.toString().split('').sort().join('')
    }
    while (true) {
      let doSkip = false
      i++

      for (let j = 2; j < 7; j++) {
        if (!isPermutation(i, i * j)) {
          doSkip = true
          break
        }
      }

      if (doSkip) { continue }
      return i
    }
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem53 = new Problem(
  53,
  function () {}
)
/**
* Unsolved
* @type {Problem}
*/
const Problem54 = new Problem(
  54,
  function () {}
)
/**
* Unsolved
* @type {Problem}
*/
const Problem55 = new Problem(
  55,
  function () {}
)
/**
* Unsolved
* @type {Problem}
*/
const Problem56 = new Problem(
  56,
  function () {}
)
/**
* Unsolved
* @type {Problem}
*/
const Problem57 = new Problem(
  57,
  function () {}
)
/**
* Unsolved
* @type {Problem}
*/
const Problem58 = new Problem(
  58,
  function () {}
)
/**
* Unsolved
* @type {Problem}
*/
const Problem59 = new Problem(
  59,
  function () {}
)

module.exports = [
  Problem50,
  Problem51,
  Problem52,
  Problem53,
  Problem54,
  Problem55,
  Problem56,
  Problem57,
  Problem58,
  Problem59
]
