const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[1]

console.log(S[S.length - 1])
