const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

console.log(N % 2 == 0 ? 'Yes' : 'No')
