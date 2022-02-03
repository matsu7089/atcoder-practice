const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

const dp = Array(N)
dp[0] = A[0]
dp[1] = Math.max(A[0], A[1])

for (let i = 2; i < N; i++) {
  const p1 = dp[i - 2] + A[i]
  const p2 = dp[i - 1]
  dp[i] = Math.max(p1, p2)
}

console.log(dp[N - 1])
