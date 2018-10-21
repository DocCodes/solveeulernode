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
* Solved 2018-10-20
* @type {Problem}
*/
const Problem21 = new Problem(
  21,
  function () {
    let li = []
    let pairs = []
    for (let i = 1; i <= 10000; i++) {
      let s = 0
      for (let j = 1; j < i; j++) {
        if (i % j === 0) { s += j }
      }
      li.push(s)
    }
    for (let i = 0; i < 10000; i++) {
      let e = li[i]
      if (i + 1 < e && e >= 1 && e <= 10000 && li[e - 1] === i + 1) {
        pairs.push([i + 1, e])
      }
    }
    return pairs.reduce((acc, e) => acc + e.reduce((ecc, x) => ecc + x), 0)
  }
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
  function () {
    let temp = BigInt(1)
    let fib = BigInt(0)
    let i = 0
    while (fib.toString().length < 1000) {
      temp = fib.add(temp)
      fib = temp.minus(fib)
      i++
    }
    return i
  }
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
