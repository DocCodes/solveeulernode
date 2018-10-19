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
      console.log(`Solution: ${this.solution()}`)
    } else {
      console.log(`Solution: Unsolved`)
    }
  }
}

module.exports = Problem
