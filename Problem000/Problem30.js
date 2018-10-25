const Problem = require('../Problem.js')

/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem30 = new Problem(
  30,
  function () {
    let tot = 0
    const sumFifths = (n) => {
      let sum = 0
      for (let c of n.toString()) {
        sum += c ** 5
      }
      return sum
    }

    for (let i = 2; i < 5 * 10 ** 5; i++) {
      if (sumFifths(i) === i) { tot += i }
    }
    return tot
  }
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem31 = new Problem(
  31,
  function () {
    let ways = 0
    for (let i = 200; i >= 0; i -= 200) {
      for (let j = i; j >= 0; j -= 100) {
        for (let k = j; k >= 0; k -= 50) {
          for (let m = k; m >= 0; m -= 20) {
            for (let n = m; n >= 0; n -= 10) {
              for (let o = n; o >= 0; o -= 5) {
                for (let p = o; p >= 0; p -= 2) {
                  ways++
                }
              }
            }
          }
        }
      }
    }
    return ways
  }
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem32 = new Problem(
  32,
  function () {
    let li = []
    const isPandigital = (n) => {
      let st = n.join('')
      if (st.length !== 9) { return false }
      for (var i = 9; i >= 1; i--) {
        if (!st.includes(i)) { return false }
      }
      return true
    }

    for (var i = 1; i < 9 ** 4; i++) {
      for (var j = i; j < 9 ** 4; j++) {
        if ([i, j, i * j].join('').length > 9) { break }
        if (isPandigital([i, j, i * j]) && !li.includes(i * j)) {
          li.push(i * j)
        }
      }
    }
    return li.reduce((acc, e) => acc + e, 0)
  }
)
/**
* Solved 2018-10-23
* @type {Problem}
*/
const Problem33 = new Problem(
  33,
  function () {
    let num = 1
    let dom = 1
    const makeSet = (li) => { return Array.from(new Set(li)) }
    const intArray = (i) => { return i.toString().split('') }
    const shouldSkip = (i, j) => {
      let comboAry = [...intArray(i), ...intArray(j)]
      if (i === j) { return true }
      if (i % 10 === 0) { return true }
      if (j % 10 === 0) { return true }
      if (makeSet(intArray(i)).length === 1) { return true }
      if (makeSet(intArray(j)).length === 1) { return true }
      return comboAry.length === makeSet(comboAry).length
    }
    const getShared = (i, j) => {
      for (let d of makeSet([...intArray(i), ...intArray(j)])) {
        if (i.toString().includes(d) && j.toString().includes(d)) {
          return d
        }
      }
    }

    for (let i = 2; i < 100; i++) {
      for (let j = 1; j < i; j++) {
        if (shouldSkip(i, j)) { continue }
        let sh = getShared(i, j)
        let newI = parseInt(i.toString().replace(sh, ''))
        let newJ = parseInt(j.toString().replace(sh, ''))
        if (j / i === newJ / newI) {
          num *= newJ
          dom *= newI
        }
      }
    }

    return dom / num
  }
)
/**
* Solved 2018-10-22
* @type {Problem}
*/
const Problem34 = new Problem(
  34,
  function () {
    let sum = 0
    const factorial = (i) => {
      if (i === 0) { return 1 }
      for (let j = i - 1; j > 1; j--) {
        i *= j
      }
      return i
    }
    const factsEqualOriginal = (i, digits) => {
      let sum = 0
      for (let d of digits) {
        sum += factorial(d)
        if (sum > i) { return false }
      }
      return sum === i
    }
    for (let i = 10; i < factorial(9); i++) {
      let digits = i.toString().split('').map(e => parseInt(e))
      if (factsEqualOriginal(i, digits)) {
        sum += i
      }
    }
    return sum
  }
)
/**
* Solved 2018-10-23
* @type {Problem}
*/
const Problem35 = new Problem(
  35,
  function () {
    let tot = 0
    const isPrime = (n) => {
      if (n === 0 || n === 1) { return false }
      for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) { return false }
      }
      return true
    }
    const isCirclePrime = (n) => {
      let st = n.toString().split('')
      for (let i = 0; i < st.length; i++) {
        st.push(st.shift())
        if (!isPrime(parseInt(st.join('')))) { return false }
      }
      return true
    }

    for (var i = 2; i < 1000000; i++) {
      if (isCirclePrime(i)) {
        tot++
      }
    }
    return tot
  }
)
/**
* Solved 2018-10-23
* @type {Problem}
*/
const Problem36 = new Problem(
  36,
  function () {
    let sum = 0
    const isPalindrome = (st) => {
      return st.split('').reverse().join('') === st
    }
    for (var i = 0; i < 1000000; i++) {
      if (isPalindrome(i.toString()) && isPalindrome(i.toString(2))) {
        sum += i
      }
    }
    return sum
  }
)
/**
* Solved 2018-10-23
* @type {Problem}
*/
const Problem37 = new Problem(
  37,
  function () {
    let tot = 0
    let cnt = 11
    let i = 10
    const isPrime = (n) => {
      if (n === 0 || n === 1) { return false }
      for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) { return false }
      }
      return true
    }
    const isTruncPrime = (n) => {
      let st = n.toString().split('')
      while (st.length !== 0) {
        if (!isPrime(parseInt(st.join('')))) { return false }
        st.shift()
      }
      st = n.toString().split('')
      while (st.length !== 0) {
        if (!isPrime(parseInt(st.join('')))) { return false }
        st.pop()
      }
      return true
    }
    while (cnt !== 0) {
      if (isTruncPrime(++i)) {
        console.log(i)
        tot += i
        cnt--
      }
    }
    return tot
  }
)
/**
* Solved 2018-10-24
* @type {Problem}
*/
const Problem38 = new Problem(
  38,
  function () {
    const isPandigital = (n) => {
      let st = n.toString()
      for (var i = 9; i >= 1; i--) {
        if (!st.includes(i)) { return false }
      }
      return true
    }
    const isPandigitalProduct = (n) => {
      let concat = n.toString()
      for (let i = 2; i <= 9; i++) {
        concat += (n * i).toString()
        if (concat.length < 9) { continue }
        if (concat.length > 9) { return false }
        if (isPandigital(concat)) { return [true, concat] }
        return false
      }
    }

    let lg = isPandigitalProduct(192)
    for (let i = 193; i < 10 ** 5; i++) {
      if (isPandigitalProduct(i)[0]) {
        lg = isPandigitalProduct(i)
      }
    }
    return lg[1]
  }
)
/**
* Solved 2018-10-25
* @type {Problem}
*/
const Problem39 = new Problem(
  39,
  function () {
    let pCount = new Array(1001).fill(0)
    const isRightTriangle = (a, b, c) => {
      return a ** 2 + b ** 2 === c ** 2
    }

    for (let p = 2; p < 1001; p += 2) {
      for (let c = 1; c < p; c++) {
        for (let b = 1; b < p - c; b++) {
          let a = p - b - c
          if (a + b + c !== p) { break }
          if (isRightTriangle(a, b, c)) {
            pCount[p]++
          }
        }
      }
    }
    return pCount.indexOf(Math.max(...pCount))
  }
)

module.exports = [
  Problem30,
  Problem31,
  Problem32,
  Problem33,
  Problem34,
  Problem35,
  Problem36,
  Problem37,
  Problem38,
  Problem39
]
