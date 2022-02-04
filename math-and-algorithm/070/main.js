const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))

const X = []
const Y = []
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map((v) => parseInt(v))
  X.push(x)
  Y.push(y)
}

const count = (x1, y1, x2, y2) => {
  let cnt = 0
  for (let i = 0; i < N; i++) {
    if (x1 <= X[i] && X[i] <= x2 && y1 <= Y[i] && Y[i] <= y2) cnt++
  }
  return cnt
}

let ans = 10n ** 32n
for (let a = 0; a < N; a++) {
  for (let b = 0; b < N; b++) {
    for (let c = 0; c < N; c++) {
      for (let d = 0; d < N; d++) {
        const x1 = X[a]
        const y1 = Y[b]
        const x2 = X[c]
        const y2 = Y[d]
        if (count(x1, y1, x2, y2) >= K) {
          const area = BigInt(Math.abs(x1 - x2)) * BigInt(Math.abs(y1 - y2))
          ans = ans < area ? ans : area
        }
      }
    }
  }
}

console.log(ans.toString())
