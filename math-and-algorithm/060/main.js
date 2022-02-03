const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

console.log(N % 4 === 0 ? 'Second' : 'First')
