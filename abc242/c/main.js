/**
 * https://atcoder.jp/contests/abc242/editorial/3515
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const mod = 998244353
const N = parseInt(input[0])

const dp = Array.from({ length: N + 1 }, () => Array(10).fill(null))

for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1
}

for (let d = 2; d <= N; d++) {
  for (let i = 1; i <= 9; i++) {
    const s = Math.max(1, i - 1)
    const e = Math.min(9, i + 1)
    for (let j = s; j <= e; j++) {
      dp[d][i] += dp[d - 1][j]
      dp[d][i] %= mod
    }
  }
}

let ans = 0
for (let i = 1; i <= 9; i++) {
  ans += dp[N][i]
  ans %= mod
}

console.log(ans)
