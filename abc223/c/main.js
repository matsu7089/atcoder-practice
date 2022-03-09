const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = Array(N)
const B = Array(N)

for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map((v) => parseInt(v))
  A[i] = a
  B[i] = b
}

let t = 0
for (let i = 0; i < N; i++) {
  t += A[i] / B[i]
}
t /= 2

let ans = 0
let ls = 0
let len = 0
for (let i = 0; i < N; i++) {
  const cs = ls + A[i] / B[i]
  if (cs > t) {
    ans = len + (t - ls) * B[i]
    break
  }
  ls = cs
  len += A[i]
}

console.log(ans)
