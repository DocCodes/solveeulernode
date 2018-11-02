const Problem = require('../Problem.js')
const BigNum = require('bignumber.js')
BigNum.config({ DECIMAL_PLACES: 50, EXPONENTIAL_AT: 1e+9 })

/**
* Solved 2018-11-01
* @type {Problem}
*/
const Problem60 = new Problem(
  60,
  function () {
    const isPrime = (n) => {
      let flr = Math.sqrt(n)
      if (n === 0 || n === 1) { return false }
      for (let j = 2; j <= flr; j++) {
        if (n % j === 0) { return false }
      }
      return true
    }
    const allCombosArePrime = (li) => {
      for (let i = 0; i < li.length; i++) {
        for (let j = 0; j < li.length; j++) {
          if (i === j) { continue }
          if (!isPrime(`${li[i]}${li[j]}`) || !isPrime(`${li[j]}${li[i]}`)) { return false }
        }
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
    let primeList = ESieve(7, 10000)

    for (let i = 0; i < primeList.length; i++) {
      let li = [primeList[i]]
      for (let j = i + 1; j < primeList.length; j++) {
        li = [primeList[i], primeList[j]]
        if (!allCombosArePrime(li)) { continue }
        for (let k = j + 1; k < primeList.length; k++) {
          li = [primeList[i], primeList[j], primeList[k]]
          if (!allCombosArePrime(li)) { continue }
          for (let m = k + 1; m < primeList.length; m++) {
            li = [primeList[i], primeList[j], primeList[k], primeList[m]]
            if (!allCombosArePrime(li)) { continue }
            for (let o = m + 1; o < primeList.length; o++) {
              li = [primeList[i], primeList[j], primeList[k], primeList[m], primeList[o]]
              if (allCombosArePrime(li)) { return li.reduce((acc, e) => acc + e, 0) }
            }
          }
        }
      }
    }
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem61 = new Problem(
  61,
  function () {
    const getTriangle = (n) => { return n * (n + 1) / 2 }
    const getSquare = (n) => { return n ** 2 }
    const getPentagonal = (n) => { return n * (3 * n - 1) / 2 }
    const getHexagonal = (n) => { return n * (2 * n - 1) }
    const getHeptagonal = (n) => { return n * (5 * n - 3) / 2 }
    const getOctagonal = (n) => { return n * (3 * n - 2) }
    const lastLineFirst = (li) => {
      li = li.map(e => e.toString())
      for (let i = 0; i < li.length - 1; i++) {
        if (li[i].slice(2) !== li[i + 1].slice(0, 2)) { return false }
      }
      return true
    }
    const isCyclic = (li) => {
      li = li.map(e => e.toString())
      if (!lastLineFirst(li)) { return false }
      if (li[0].slice(0, 2) !== li[li.length - 1].slice(2)) { return false }
      return true
    }

    for (let i = 45; i < 141; i++) {
      let used = [i]
      let triNum = getTriangle(i)
      for (let j = 32; j < 100; j++) {
        if (used.includes(j)) { continue }
        used = [i, j]
        let sqrNum = getSquare(j)
        for (let k = 26; k < 82; k++) {
          if (used.includes(k)) { continue }
          used = [i, j, k]
          let penNum = getPentagonal(k)
          console.log([triNum, sqrNum, penNum])
          for (let m = 23; m < 71; m++) {
            if (used.includes(m)) { continue }
            used = [i, j, k, m]
            let hexNum = getHexagonal(m)
            for (let o = 21; o < 64; o++) {
              if (used.includes(o)) { continue }
              used = [i, j, k, m, o]
              let hepNum = getHeptagonal(o)
              for (let p = 19; p < 59; p++) {
                if (used.includes(p)) { continue }
                used = [i, j, k, m, o, p]
                let octNum = getOctagonal(p)
              }
            }
          }
        }
      }
    }
  }
)
/**
* Solved 2018-11-02
* @type {Problem}
*/
const Problem62 = new Problem(
  62,
  function () {
    const isPermutation = (a, b) => { return sortIntStr(a) === sortIntStr(b) }
    const sortIntStr = (n) => { return sortString(n.toString()) }
    const sortString = (st) => { return st.split('').sort().join('') }
    let cubeList = new Array(10000).fill(1).map((e, i) => (i + 5000) ** 3)
    let cubeCount = {}
    cubeList.forEach(e => { cubeCount[e] = 1 })

    for (let i of cubeList) {
      for (let j of cubeList) {
        if (isPermutation(i, j) && i !== j) {
          if (++cubeCount[i] === 5) { return i }
        }
      }
    }
  }
)
/**
* Solved 2018-11-02
* @type {Problem}
*/
const Problem63 = new Problem(
  63,
  function () {
    let result = 0
    let lower = 0
    let n = 1

    while (lower < 10) {
      lower = parseInt(Math.ceil(Math.pow(10, (n - 1) / n)))
      result += 10 - lower
      n++
    }
    return result
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem64 = new Problem(
  64,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem65 = new Problem(
  65,
  function () {
    let d = BigNum(1)
    let n = BigNum(2)

    for (let i = 2; i < 101; i++) {
      let temp = d
      let c = (i % 3 === 0) ? 2 * (i / 3) : 1
      d = n
      n = BigNum(c).multipliedBy(d).plus(temp)
    }
    return n.toString().split('').reduce((acc, e) => acc + parseInt(e), 0)
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem66 = new Problem(
  66,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem67 = new Problem(
  67,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem68 = new Problem(
  68,
  function () {}, false
)
/**
* Unsolved
* @type {Problem}
*/
const Problem69 = new Problem(
  69,
  function () {}, false
)

module.exports = [
  Problem60,
  Problem61,
  Problem62,
  Problem63,
  Problem64,
  Problem65,
  Problem66,
  Problem67,
  Problem68,
  Problem69
]
