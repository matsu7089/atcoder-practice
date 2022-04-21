const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M, K] = input[0].split(' ').map((v) => parseInt(v))
const mod = 998244353

const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0))
dp[0][0] = 1

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    for (let k = Math.max(0, j - M); k < j; k++) {
      dp[i][j] += dp[i - 1][k]
      dp[i][j] %= mod
    }
  }
}

const ans = dp[N].reduce((a, c) => (a + c) % mod)
console.log(ans)
