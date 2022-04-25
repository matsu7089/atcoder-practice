/**
 * https://atcoder.jp/contests/abc240/editorial/3421
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, X] = input[0].split(' ').map((v) => parseInt(v))

const AB = Array(N)
for (let i = 0; i < N; i++) {
  AB[i] = input[i + 1].split(' ').map((v) => parseInt(v))
}

const dp = Array.from({ length: N + 1 }, () => Array(X + 1).fill(false))
dp[0][0] = true

for (let k = 0; k < N; k++) {
  dp[k].forEach((v, j) => {
    if (v === false) return

    const [a, b] = AB[k]
    if (j + a <= X) dp[k + 1][j + a] = true
    if (j + b <= X) dp[k + 1][j + b] = true
  })
}

console.log(dp[N][X] ? 'Yes' : 'No')
