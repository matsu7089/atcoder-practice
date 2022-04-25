const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))

const B = []
for (let i = 0; i < N; i++) {
  B.push(input[i + 1].split(' ').map((v) => parseInt(v)))
}

let c1 = true
for (let i = 0; i < N; i++) {
  const r = B[i]
  for (let j = 1; j < M; j++) {
    if (r[j] - r[j - 1] !== 1) c1 = false
  }
}

let c2 = (B[0][0] - 1) % 7 <= 7 - M

let c3 = true
for (let i = 1; i < N; i++) {
  if (B[i][0] - B[i - 1][0] !== 7) c3 = false
}

console.log(c1 && c2 && c3 ? 'Yes' : 'No')
