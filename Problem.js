class Problem {
  constructor (name, number, desc, prompt, solution, solved = true) {
    this.name = name
    this.number = number
    this.desc = desc
    this.prompt = prompt
    this.solution = solution
    this.solved = solved
  }

  printProblem () {
    console.log(this.name)
    console.log(`Problem ${this.number}`)
    console.log(this.desc)
    console.log(`\n${this.prompt}`)
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
