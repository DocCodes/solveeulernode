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
    if (this.solved) {
      let start = moment()
      console.log(`Solution: ${this.solution()}`)
      console.log(`Solution Took: ${moment.duration(moment() - start, 'milliseconds').format('S [ms]')}`)
    } else {
      console.log(`Solution: Unsolved`)
    }
  }

  loadResources () {
    return JSON.parse(fs.readFileSync(`./resources/p${this.id}.json`))
  }
}

module.exports = Problem
