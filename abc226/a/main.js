const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const X = parseFloat(input[0])

console.log(Math.round(X))
