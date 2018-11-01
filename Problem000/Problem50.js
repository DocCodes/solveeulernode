const Problem = require('../Problem.js')
const BigNum = require('bignumber.js')
BigNum.config({ DECIMAL_PLACES: 50, EXPONENTIAL_AT: 1e+9 })

/**
* Solved 2018-10-30
* @type {Problem}
*/
const Problem50 = new Problem(
  50,
  function () {
    const isPrime = (n) => {
      let flr = Math.sqrt(n)
      if (n === 0 || n === 1) { return false }
      for (let j = 2; j <= flr; j++) {
        if (n % j === 0) { return false }
      }
      return true
    }
    const ESieve = (mn, mx) => {
      let li = []
      for (let i = mn; i < mx; i++) {
        if (isPrime(i)) { li.push(i) }
      }
      return li
    }
    let limit = 1000000
    let result = 0
    let numberPrimes = 0
    let primeList = ESieve(2, limit)
    let primeSumList = new Array(primeList.length).fill(0)

    primeSumList[0] = 0
    for (let i = 0; i < primeList.length; i++) {
      primeSumList[i + 1] = primeSumList[i] + primeList[i]
    }

    for (let i = numberPrimes; i < primeSumList.length; i++) {
      for (let j = i - (numberPrimes + 1); j >= 0; j--) {
        if (primeSumList[i] - primeSumList[j] > limit) { break }

        if (primeList.includes(primeSumList[i] - primeSumList[j])) {
          numberPrimes = i - j
          result = primeSumList[i] - primeSumList[j]
        }
      }
    }
    return result
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem51 = new Problem(
  51,
  function () {}, false
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
* Solved 2018-10-30
* @type {Problem}
*/
const Problem53 = new Problem(
  53,
  function () {
    const factorial = (n) => {
      if (n.isEqualTo(0)) { return BigNum(1) }
      for (let i = n.minus(1); i.gt(1); i = i.minus(1)) {
        n = n.multipliedBy(i)
      }
      return n
    }
    const getCombinations = (n, r) => {
      return factorial(n).dividedBy(factorial(r).multipliedBy(factorial(n.minus(r))))
    }
    let sum = 0

    for (let n = BigNum(23); n.lte(BigNum(100)); n = n.plus(1)) {
      for (let r = BigNum(1); r.lte(n); r = r.plus(1)) {
        if (getCombinations(n, r).gte(10 ** 6)) {
          sum++
        }
      }
    }
    return sum
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem54 = new Problem(
  54,
  function () {}, false
)
/**
* Solved 2018-10-30
* @type {Problem}
*/
const Problem55 = new Problem(
  55,
  function () {
    const getReverse = (n) => {
      let st = n.toString().split('')
      st.reverse()
      return parseInt(st.join(''))
    }
    const isPalindrome = (n) => {
      let st = n.toString().split('')
      st.reverse()
      return st.join('') === n.toString()
    }
    let sum = 0

    for (let i = 0; i < 10000; i++) {
      let curNum = i
      for (let loops = 0; loops < 50; loops++) {
        curNum = curNum + getReverse(curNum)
        if (isPalindrome(curNum)) {
          sum++
          break
        }
      }
    }
    return 10000 - sum
  }
)
/**
* Solved 2018-11-01
* @type {Problem}
*/
const Problem56 = new Problem(
  56,
  function () {
    let sums = []
    for (let a = 1; a < 100; a++) {
      for (let b = 1; b < 100; b++) {
        sums.push(BigNum(a).exponentiatedBy(b).toString().split('').reduce((acc, e) => acc + parseInt(e), 0))
      }
    }
    return Math.max(...sums)
  }
)
/**
* Solved 2018-11-01
* @type {Problem}
*/
const Problem57 = new Problem(
  57,
  function () {
    let num = BigNum(3)
    let dom = BigNum(2)
    let tot = 0

    for (let i = 1; i < 1000; i++) {
      num = num.plus(dom.multipliedBy(2))
      dom = num.minus(dom)
      if (num.toString().length > dom.toString().length) { tot++ }
    }
    return tot
  }
)
/**
* Solved 2018-10-30
* @type {Problem}
*/
const Problem58 = new Problem(
  58,
  function () {
    const isPrime = (n) => {
      let flr = Math.sqrt(n)
      if (n === 0 || n === 1) { return false }
      for (let j = 2; j <= flr; j++) {
        if (n % j === 0) { return false }
      }
      return true
    }
    let totPrimes = 0
    let sln = 3

    do {
      for (let i = 0; i < 4; i++) {
        if (isPrime((sln ** 2) - (i * (sln - 1)))) { totPrimes++ }
      }
      sln += 2
    } while (totPrimes / (sln * 2 - 1) > 0.10)
    return sln
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem59 = new Problem(
  59,
  function () {}, false
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
