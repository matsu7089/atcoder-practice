const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((a, b) => a - b)
  .map((v) => BigInt(v))

const sum = Array(N)
sum[N - 1] = A[N - 1]
for (let i = N - 2; i >= 0; i--) {
  sum[i] = sum[i + 1] + A[i]
}

let ans = 0n
for (let i = 0; i < N - 1; i++) {
  ans += sum[i + 1] - A[i] * BigInt(N - i - 1)
}

console.log(ans.toString())
