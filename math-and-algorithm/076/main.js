const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((a, b) => a - b)
  .map((v) => BigInt(v))

let ans = 0n
for (let i = 0; i < N; i++) {
  ans += A[i] * BigInt(2 * i - N + 1)
}

console.log(ans.toString())
