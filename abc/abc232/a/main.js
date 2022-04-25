const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [n1, _, n2] = input[0]

console.log(parseInt(n1) * parseInt(n2))
