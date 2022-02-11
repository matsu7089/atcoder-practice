const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, Q] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))

const sumA = Array(N)
for (let i = 0; i < N; i++) {
  sumA[i] = (sumA[i - 1] || 0) + A[i]
}

for (let i = 0; i < Q; i++) {
  const [L, R] = input[i + 2].split(' ').map((v) => parseInt(v) - 1)
  console.log(sumA[R] - (sumA[L - 1] || 0))
}
