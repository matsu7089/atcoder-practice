const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const S = input[1]

const ans = S[N - 1] === 'o' ? 'Yes' : 'No'
console.log(ans)
