const Problem = require('../Problem.js')

/**
* The problem counter reset
* @type {Problem}
*/
const Problem0 = new Problem(
  0,
  () => {
    return true
  }
)
/**
* Solved 2018-10-16
* @type {Problem}
*/
const Problem1 = new Problem(
  1,
  () => {
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
  () => {
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
  () => {
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
  () => {
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
  () => {
    let i = 1
    let br = true
    while (true) {
      br = true
      for (let j = 1; j <= 20; j++) {
        if (i % j !== 0) {
          br = false
          break
        }
      }
      if (br) { return i }
      i++
    }
  }
)
/**
* Solved 2018-10-16
* @type {Problem}
*/
const Problem6 = new Problem(
  6,
  () => {
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
  () => {
    let pr = false
    let prNum = 0
    let prCtr = 0
    let i = 2

    do {
      pr = true
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          pr = false
          break
        }
      }
      prCtr += pr ? 1 : 0
      prNum = pr ? i : prNum
      i++
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
  () => {
    let num = [
      '73167176531330624919225119674426574742355349194934',
      '96983520312774506326239578318016984801869478851843',
      '85861560789112949495459501737958331952853208805511',
      '12540698747158523863050715693290963295227443043557',
      '66896648950445244523161731856403098711121722383113',
      '62229893423380308135336276614282806444486645238749',
      '30358907296290491560440772390713810515859307960866',
      '70172427121883998797908792274921901699720888093776',
      '65727333001053367881220235421809751254540594752243',
      '52584907711670556013604839586446706324415722155397',
      '53697817977846174064955149290862569321978468622482',
      '83972241375657056057490261407972968652414535100474',
      '82166370484403199890008895243450658541227588666881',
      '16427171479924442928230863465674813919123162824586',
      '17866458359124566529476545682848912883142607690042',
      '24219022671055626321111109370544217506941658960408',
      '07198403850962455444362981230987879927244284909188',
      '84580156166097919133875499200524063689912560717606',
      '05886116467109405077541002256983155200055935729725',
      '71636269561882670428252483600823257530420752963450'
    ].join('')
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
  () => {
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
