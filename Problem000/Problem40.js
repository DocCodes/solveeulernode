const Problem = require('../Problem.js')

/**
* Solved 2018-10-25
* @type {Problem}
*/
const Problem40 = new Problem(
  40,
  function () {
    let bigNum = ''
    let prod = 1
    for (let i = 1; i < 5 * 10 ** 5; i++) {
      bigNum += i.toString()
    }
    for (let i = 1; i <= 1000000; i *= 10) {
      prod *= bigNum[i - 1]
    }
    return prod
  }
)
/**
* Solved 2018-10-25
* @type {Problem}
*/
const Problem41 = new Problem(
  41,
  function () {
    const isPandigital = (n) => {
      let st = n.toString()
      for (var i = st.length; i >= 1; i--) {
        if (!st.includes(i)) { return false }
      }
      return true
    }
    const isPrime = (n) => {
      let flr = Math.sqrt(n)
      for (let j = 2; j <= flr; j++) {
        if (n % j === 0) { return false }
      }
      return true
    }

    let lg = 0
    for (let i = 101; i < 10 ** 7; i += 2) {
      if (i.toString().length === 6) { continue }
      if (isPandigital(i) && isPrime(i)) {
        lg = i
      }
    }
    return lg
  }
)
/**
* Solved 2018-10-25
* @type {Problem}
*/
const Problem42 = new Problem(
  42,
  function () {
    const wordValue = (st) => { return st.split('').reduce((acc, e) => acc + alpha.indexOf(e) + 1, 0) }
    let triWords = 0
    let words = this.loadResources()
    let longestWord = Math.max(...words.map(e => e.length))
    let manyTri = new Array(longestWord * 2).fill(0).map((e, i) => ++i * (i + 1) / 2)
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    for (let w of words) {
      if (manyTri.includes(wordValue(w))) {
        triWords++
      }
    }

    return triWords
  }
)
/**
* Solved 2018-10-27
* @type {Problem}
*/
const Problem43 = new Problem(
  43,
  function () {
    let sum = 0
    const containsDupes = (st) => { return !(new Set(st).size === st.split('').length) }
    let uniqueThree = new Array(900).fill(1).map((e, i) => i + 100).filter((e) => !containsDupes(e.toString()))
    let firstThree = uniqueThree.filter((e) => e % 2 === 0)
    let midThree = uniqueThree.filter((e) => e % 7 === 0)
    let lastThree = uniqueThree.filter((e) => e % 17 === 0)
    let lastSix = []
    midThree.forEach((e) => {
      lastThree.forEach((i) => {
        lastSix.push(`${e}${i}`)
      })
    })
    lastSix = lastSix.filter((e) => {
      if (containsDupes(e)) { return false }
      if (e[1] % 5 !== 0) { return false }
      if (e.slice(1, 4) % 11 !== 0) { return false }
      if (e.slice(2, 5) % 13 !== 0) { return false }
      return true
    })

    for (let f = 1; f < 10; f++) {
      for (let beg of firstThree) {
        for (let end of lastSix) {
          let st = `${f}${beg}${end}`
          if (containsDupes(st)) { continue }
          if (st.slice(2, 5) % 3 !== 0) { continue }
          console.log(st)
          sum += parseInt(st)
        }
      }
    }
    return sum
  }
)
/**
* Solved 2018-10-27
* @type {Problem}
*/
const Problem44 = new Problem(
  44,
  function () {
    let k = 1
    const isPentagonal = (n) => {
      let penTest = (Math.sqrt(24 * n + 1) + 1) / 6
      return penTest === parseInt(penTest)
    }

    while (true) {
      let n = ++k * (3 * k - 1) / 2
      for (let j = k - 1; j > 0; j--) {
        let m = j * (3 * j - 1) / 2
        if (isPentagonal(n - m) && isPentagonal(n + m)) {
          return n - m
        }
      }
    }
  }
)
/**
* Solved 2018-10-27
* @type {Problem}
*/
const Problem45 = new Problem(
  45,
  function () {
    let i = 285
    const getTriangle = (n) => { return n * (n + 1) / 2 }
    const isPentagonal = (n) => {
      let penTest = (Math.sqrt(24 * n + 1) + 1) / 6
      return penTest === parseInt(penTest)
    }
    const isHexagonal = (n) => {
      let hexTest = (Math.sqrt(8 * n + 1) + 1) / 4
      return hexTest === parseInt(hexTest)
    }

    while (true) {
      let tri = getTriangle(++i)
      if (isHexagonal(tri)) {
        if (isPentagonal(tri)) {
          return tri
        }
      }
    }
  }
)
/**
* Solved 2018-10-27
* @type {Problem}
*/
const Problem46 = new Problem(
  46,
  function () {
    let i = 1
    let j = 0
    let found = false
    const isSquare = (n) => {
      let sqTest = Math.sqrt(n / 2)
      return sqTest === parseInt(sqTest)
    }
    const isPrime = (n) => {
      let flr = Math.sqrt(n)
      for (let j = 2; j <= flr; j++) {
        if (n % j === 0) { return false }
      }
      return true
    }
    let primeList = new Array(100000).fill(0).map((e, i) => i * 2 + 1).filter((e) => isPrime(e))

    while (!found) {
      found = true
      j = 0
      i += 2
      while (i >= primeList[j]) {
        if (isSquare(i - primeList[j])) {
          found = false
          break
        }
        j++
      }
    }
    return i
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem47 = new Problem(
  47,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem48 = new Problem(
  48,
  function () {},
  false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem49 = new Problem(
  49,
  function () {},
  false
)

module.exports = [
  Problem40,
  Problem41,
  Problem42,
  Problem43,
  Problem44,
  Problem45,
  Problem46,
  Problem47,
  Problem48,
  Problem49
]
