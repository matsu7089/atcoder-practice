const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const N = parseInt(input[0])
const A = input[1]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((a, b) => a - b)

const ans = A[N - 1] - A[0]
console.log(ans)
