const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))
const B = input[2].split(' ').map((v) => parseInt(v))

const { abs } = Math
const dp = Array.from({ length: N }, () => [false, false])
dp[0][0] = true
dp[0][1] = true

for (let i = 1; i < N; i++) {
  const pa = A[i - 1]
  const pb = B[i - 1]
  const ca = A[i]
  const cb = B[i]

  if (dp[i - 1][0]) {
    if (abs(pa - ca) <= K) dp[i][0] = true
    if (abs(pa - cb) <= K) dp[i][1] = true
  }
  if (dp[i - 1][1]) {
    if (abs(pb - ca) <= K) dp[i][0] = true
    if (abs(pb - cb) <= K) dp[i][1] = true
  }
}

const ans = dp[N - 1][0] || dp[N - 1][1]
console.log(ans ? 'Yes' : 'No')
