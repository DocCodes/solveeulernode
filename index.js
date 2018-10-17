/* global pkgInfo, args */

// <region> Require
const fs = require('fs')
const commandLineArgs = require('command-line-args')
const commandLineUsage = require('command-line-usage')
const problems = [
  ...require('./Problem000/index.js')
]
// </region>

// <region> Constants & Globals
global.pkgInfo = JSON.parse(fs.readFileSync('package.json'))
const options = [
  { name: 'problem', alias: 'p', description: 'Displays the prompt of a problem.', type: Number },
  { name: 'solution', alias: 's', description: 'Displays the correct solution of a problem.', type: Number },
  { name: 'full', alias: 'f', description: 'Displays the problems and solution.', type: Number },
  { name: 'help', alias: 'h', description: 'Displays this help message.', type: Boolean }
]
global.args = commandLineArgs(options)
const usage = commandLineUsage([
  {
    header: pkgInfo.name,
    content: pkgInfo.description
  },
  {
    header: 'Options',
    optionList: options
  }
])
// </region>

if (Object.keys(args).length === 0 || args.help) {
  console.log(usage)
}

if (args.problem) {
  if (args.problem >= 1 && args.problem <= problems.length) {
    let prob = problems[args.problem]
    prob.printProblem()
  }
}

if (args.solution) {
  if (args.solution >= 1 && args.solution <= problems.length) {
    let prob = problems[args.solution]
    prob.printSolution()
  }
}

if (args.full) {
  if (args.full >= 1 && args.full <= problems.length) {
    let prob = problems[args.full]
    prob.printProblem()
    prob.printSolution()
  }
}
