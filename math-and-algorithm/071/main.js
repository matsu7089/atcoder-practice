const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const A = []
const B = []
const C = []
for (let i = 1; i <= N; i++) {
  const [a, b, c] = input[i].split(' ').map((v) => parseInt(v))
  A.push(a)
  B.push(b)
  C.push(c)
}

const check = (x, y) => {
  for (let i = 0; i < N; i++) {
    if (A[i] * x + B[i] * y > C[i]) return false
  }
  return true
}

let ans = -Infinity
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (A[i] * B[j] === A[j] * B[i]) continue
    const crossX = (C[i] * B[j] - C[j] * B[i]) / (A[i] * B[j] - A[j] * B[i])
    const crossY = (C[i] * A[j] - C[j] * A[i]) / (B[i] * A[j] - B[j] * A[i])

    if (check(crossX, crossY)) {
      ans = Math.max(ans, crossX + crossY)
    }
  }
}

console.log(ans)
