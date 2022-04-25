const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))

const P = []

for (let i = 0; i < N; i++) {
  const p = input[i + 1].split(' ').map((v) => parseInt(v))
  P.push(p.reduce((a, c) => a + c))
}

const sorted = [...P].sort((a, b) => b - a)

let ans = []
const target = sorted[K - 1]

for (let i = 0; i < N; i++) {
  ans.push(target - P[i] <= 300 ? 'Yes' : 'No')
}

console.log(ans.join('\n'))
