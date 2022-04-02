const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K, X] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((a, b) => b - a)

let k = K

for (let i = 0; i < N; i++) {
  if (A[i] < X || k === 0) {
    break
  }
  const m = Math.min(Math.floor(A[i] / X), k)
  A[i] -= X * m
  k -= m
}

A.sort((a, b) => b - a)

const range = Math.min(k, N)
for (let i = 0; i < range; i++) {
  A[i] = 0
}

const ans = A.reduce((a, c) => a + c)
console.log(ans)
