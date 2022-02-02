const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const h = input[1].split(' ').map((v) => parseInt(v))

const dp = Array(N)
dp[0] = 0
dp[1] = Math.abs(h[0] - h[1])

for (let i = 2; i < N; i++) {
  const p1 = dp[i - 1] + Math.abs(h[i - 1] - h[i])
  const p2 = dp[i - 2] + Math.abs(h[i - 2] - h[i])
  dp[i] = Math.min(p1, p2)
}

console.log(dp[N - 1])
