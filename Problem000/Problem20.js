const Problem = require('../Problem.js')
const BigNum = require('bignumber.js')
BigNum.config({ DECIMAL_PLACES: 50, EXPONENTIAL_AT: 1e+9 })

/**
* Solved 2018-10-19
* @type {Problem}
*/
const Problem20 = new Problem(
  20,
  function () {
    let tot = BigNum(100)
    for (let i = tot.minus(1); i > 0; i--) {
      tot = tot.multipliedBy(i)
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
    let tot = BigNum(0)
    names.sort()
    for (let i = 0; i < names.length; i++) {
      let val = 0
      for (let c of names[i]) {
        val += alpha.indexOf(c) + 1
      }
      val *= (i + 1)
      tot = tot.plus(val)
    }
    return tot
  }
)
/**
* Solved 2018-10-21
* @type {Problem}
*/
const Problem23 = new Problem(
  23,
  function () {
    let abundants = []
    let canBeWrittenAbundents = []
    let sum = 0
    for (let i = 2; i < 28124; i++) {
      let sumFactors = 0
      for (let j = 1; j < i; j++) {
        if (i % j === 0) { sumFactors += j }
      }
      if (sumFactors > i) { abundants.push(i) }
    }
    for (let i = 0; i < abundants.length; i++) {
      for (let j = 0; j < abundants.length; j++) {
        canBeWrittenAbundents[abundants[i] + abundants[j]] = abundants[i] + abundants[j] > i
      }
    }
    for (let i = 1; i < 28124; i++) {
      if (!canBeWrittenAbundents[i]) {
        sum += i
      }
    }
    return sum
  }
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem24 = new Problem(
  24,
  function () {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let res = []
    let n = 999999
    const factorial = (n) => {
      for (let i = n - 1; i > 1; i--) {
        n *= i
      }
      return n
    }

    for (let i = digits.length - 1; i > -1; i--) {
      let fct = factorial(i)
      let ind = Math.floor(n / fct)
      n %= fct
      res.push(digits.splice(ind, 1)[0])
    }
    return res.join('')
  }
)
/**
* Solved 2018-10-20
* @type {Problem}
*/
const Problem25 = new Problem(
  25,
  function () {
    let temp = BigNum(1)
    let fib = BigNum(0)
    let i = 0
    while (fib.toString().length < 1000) {
      temp = fib.plus(temp)
      fib = temp.minus(fib)
      i++
    }
    return i
  }
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem26 = new Problem(
  26,
  function () {
    let seqLen = 0
    for (var i = 1000; i > 1; i--) {
      if (seqLen >= i) {
        break
      }
      let rem = new Array(i).fill(0)
      let val = 1
      let p = 0

      while (rem[val] === 0 && val !== 0) {
        rem[val] = p
        val *= 10
        val %= i
        p++
      }

      if (p - rem[val] > seqLen) {
        seqLen = p - rem[val]
      }
    }
    return ++i
  }
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem27 = new Problem(
  27,
  function () {
    let aMax = 0
    let bMax = 0
    let nMax = 0
    const isPrime = (n) => {
      let flr = Math.sqrt(n)
      for (let i = 2; i <= flr; i++) {
        if (n % i === 0) { return false }
      }
      return true
    }

    for (let a = -1000; a <= 1000; a++) {
      for (let b = -1000; b <= 1000; b++) {
        let n = 0
        while (isPrime(Math.abs(n * n + a * n + b))) {
          n++
        }
        if (n > nMax) {
          aMax = a
          bMax = b
          nMax = n
        }
      }
    }
    return aMax * bMax
  }
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem28 = new Problem(
  28,
  function () {
    let sum = 1
    for (let i = 3; i < 1003; i += 2) {
      for (let j = 0; j < 4; j++) {
        sum += (i ** 2) - (j * (i - 1))
      }
    }
    return sum
  }
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem29 = new Problem(
  29,
  function () {
    let li = []
    for (let a = 2; a <= 100; a++) {
      for (let b = 2; b <= 100; b++) {
        let result = BigNum(a).exponentiatedBy(b)
        if (!li.includes(result.toString())) {
          li.push(result.toString())
        }
      }
    }
    return li.length
  }
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
