const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const dp = Array(N + 1)
dp[0] = 1
dp[1] = 1

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2]
}

console.log(dp[N])
