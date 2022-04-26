const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))
const mod = 998244353

const dp = Array.from({ length: N }, () => Array(10).fill(0))
dp[0][A[0]] = 1

for (let i = 1; i < N; i++) {
  for (let x = 0; x < 10; x++) {
    const pat = dp[i - 1][x]
    if (pat === 0) continue

    const y = A[i]
    const f = (x + y) % 10
    const g = (x * y) % 10

    dp[i][f] += pat
    dp[i][f] %= mod

    dp[i][g] += pat
    dp[i][g] %= mod
  }
}

console.log(dp[N - 1].join('\n'))
