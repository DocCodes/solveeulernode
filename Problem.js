const fs = require('fs')
const moment = require('moment')
require('moment-duration-format')

class Problem {
  constructor (id, solution, solved = true) {
    this.id = id
    this.solution = solution
    this.solved = solved
  }

  printURL () {
    console.log(`https://projecteuler.net/problem=${this.id}`)
  }

  printSolution () {
    let start = moment()
    let solution = this.solution()
    let end = moment()
    let diff = end - start
    console.log(`Solution: ${solution}`)
    console.log(`Solution Took: ${moment.duration(diff, 'milliseconds').format('S [ms]')}`)
  }

  loadResources () {
    return JSON.parse(fs.readFileSync(`./resources/p${this.id}.json`))
  }
}

module.exports = Problem
