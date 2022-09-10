const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]
const T = input[1]

console.log(T.startsWith(S) ? 'Yes' : 'No')
