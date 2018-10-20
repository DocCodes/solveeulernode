const Problem = require('../Problem.js')
const BigInt = require('big-integer')

/**
* Solved 2018-10-19
* @type {Problem}
*/
const Problem20 = new Problem(
  20,
  function () {
    let tot = BigInt(100)
    for (let i = tot.minus(1); i > 0; i--) {
      tot = tot.times(i)
    }
    return tot.toString().split('').map(e => parseInt(e)).reduce((acc, e) => acc + e, 0)
  }
)

/**
* Unsolved
* @type {Problem}
*/
const Problem21 = new Problem(
  21,
  function () {},
  false
)
/**
* Solved 2018-10-19
* @type {Problem}
*/
const Problem22 = new Problem(
  22,
  function () {
    let names = this.loadResources()
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let tot = BigInt(0)
    names.sort()
    for (let i = 0; i < names.length; i++) {
      let val = 0
      for (let c of names[i]) {
        val += alpha.indexOf(c) + 1
      }
      val *= (i + 1)
      tot = tot.add(val)
    }
    return tot
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem23 = new Problem(
  23,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem24 = new Problem(
  24,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem25 = new Problem(
  25,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem26 = new Problem(
  26,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem27 = new Problem(
  27,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem28 = new Problem(
  28,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem29 = new Problem(
  29,
  function () {},
  false
)

module.exports = [
  Problem20,
  Problem21,
  Problem22,
  Problem23,
  Problem24,
  Problem25,
  Problem26,
  Problem27,
  Problem28,
  Problem29
]
