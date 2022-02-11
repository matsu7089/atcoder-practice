const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, Q] = input[0].split(' ').map((v) => parseInt(v))

const A = Array(N + 1).fill(0)

for (let i = 1; i <= Q; i++) {
  const [L, R, X] = input[i].split(' ').map((v) => parseInt(v))
  A[L - 1] += X
  A[R] -= X
}

let ans = ''
for (let i = 1; i < N; i++) {
  ans += A[i] === 0 ? '=' : A[i] > 0 ? '<' : '>'
}

console.log(ans)
