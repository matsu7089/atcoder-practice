const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, W] = input[0].split(' ').map((v) => parseInt(v))

const dp = Array(N + 1)
for (let i = 0; i <= N; i++) {
  dp[i] = Array(W + 1).fill(-Infinity)
}
dp[0][0] = 0

for (let i = 1; i <= N; i++) {
  const [w, v] = input[i].split(' ').map((v) => parseInt(v))

  for (let j = 0; j <= W; j++) {
    if (j < w) {
      dp[i][j] = dp[i - 1][j]
    }
    if (j >= w) {
      const p1 = dp[i - 1][j]
      const p2 = dp[i - 1][j - w] + v
      dp[i][j] = Math.max(p1, p2)
    }
  }
}

let ans = -Infinity
for (let i = 0; i <= W; i++) {
  ans = Math.max(ans, dp[N][i])
}

console.log(ans)
