const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const P = []

for (let i = 0; i < N; i++) {
  P.push(input[i + 1].split(' ').map((v) => parseInt(v)))
}

let xy = 0

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const p1 = P[i]
    const p2 = P[j]

    const d = Math.abs(p1[0] - p2[0]) ** 2 + Math.abs(p1[1] - p2[1]) ** 2
    xy = Math.max(xy, d)
  }
}

console.log(Math.sqrt(xy))
