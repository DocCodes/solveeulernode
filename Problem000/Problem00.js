const Problem = require('../Problem.js')

/**
* The problem counter reset
* @type {Problem}
*/
const Problem0 = new Problem(
  0,
  function () {
    return true
  }
)
/**
* Solved 2018-10-16
* @type {Problem}
*/
const Problem1 = new Problem(
  1,
  function () {
    let sum = 0
    for (let i = 0; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) { sum += i }
    }
    return sum
  }
)
/**
* Solved 2018-10-16
* @type {Problem}
*/
const Problem2 = new Problem(
  2,
  function () {
    let a = 0
    let b = 1
    let sum = 0
    while (a < 4000000 && b < 4000000) {
      b = a + b
      a = b - a
      sum += b % 2 === 0 ? b : 0
    }
    return sum
  }
)
/**
* Solved 2018-10-16
* @type {Problem}
*/
const Problem3 = new Problem(
  3,
  function () {
    let chk = 600851475143
    let prm = 0
    for (let i = 0; i < chk * 2; i++) {
      if (chk % i === 0) {
        chk /= i
        prm = i
      }
    }
    return prm
  }
)
/**
* Solved 2018-10-16
* @type {Problem}
*/
const Problem4 = new Problem(
  4,
  function () {
    let pld = 0
    for (let i = 100; i < 999; i++) {
      for (let j = 100; j < 999; j++) {
        if (i * j >= pld) {
          pld = (i * j).toString().split('').reverse().join('') === (i * j).toString() ? (i * j) : pld
        }
      }
    }
    return pld
  }
)
/**
* Solved 2018-10-16
* @type {Problem}
*/
const Problem5 = new Problem(
  5,
  function () {
    let i = 0
    const isDivTen = (n) => {
      for (let i = 1; i <= 20; i++) {
        if (n % i !== 0) { return false }
      }
      return true
    }

    while (true) {
      if (isDivTen(++i)) { return i }
    }
  }
)
/**
* Solved 2018-10-16
* @type {Problem}
*/
const Problem6 = new Problem(
  6,
  function () {
    let sumSquare = 0
    let squareSum = 0

    for (let i = 1; i <= 100; i++) {
      sumSquare += i ** 2
      squareSum += i
    }
    squareSum **= 2

    return squareSum - sumSquare
  }
)
/**
* Solved 2018-10-16
* @type {Problem}
*/
const Problem7 = new Problem(
  7,
  function () {
    let pr = false
    let prNum = 0
    let prCtr = 0
    let i = 1
    const isPrime = (n) => {
      let flr = Math.sqrt(n)
      for (let i = 2; i <= flr; i++) {
        if (n % i === 0) { return false }
      }
      return true
    }

    do {
      pr = isPrime(++i)
      prCtr += pr ? 1 : 0
      prNum = pr ? i : prNum
    } while (prCtr < 10001)

    return prNum
  }
)
/**
* Solved 2018-10-16
* @type {Problem}
*/
const Problem8 = new Problem(
  8,
  function () {
    let num = this.loadResources()
    let mx = 0
    let sz = 13
    let sum = 0

    for (let i = 0; i < num.length - sz; i++) {
      sum = num.substr(i, 13).split('').map(e => parseInt(e)).reduce((e, acc) => acc * e)
      if (sum >= mx) { mx = sum }
    }

    return mx
  }
)
/**
* Solved 2018-10-17
* @type {Problem}
*/
const Problem9 = new Problem(
  9,
  function () {
    for (let a = 1; a < 1000; a++) {
      for (let b = 1; b < 1000; b++) {
        for (let c = 1; c < 1000; c++) {
          if (a ** 2 + b ** 2 === c ** 2) {
            if (a + b + c === 1000) {
              return a * b * c
            }
          }
        }
      }
    }
  }
)

module.exports = [
  Problem0,
  Problem1,
  Problem2,
  Problem3,
  Problem4,
  Problem5,
  Problem6,
  Problem7,
  Problem8,
  Problem9
]
