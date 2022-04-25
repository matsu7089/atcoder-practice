const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1]
  .split(' ')
  .map((v) => parseInt(v))
  .reverse()

const C = input[2]
  .split(' ')
  .map((v) => parseInt(v))
  .reverse()

const arr = Array(N + M + 1).fill(0)

let ans = []
for (let i = 0; i <= M; i++) {
  const m = (C[i] - arr[i]) / A[0]
  ans.push(m)

  A.forEach((a, j) => {
    arr[i + j] += a * m
  })
}

console.log(ans.reverse().join(' '))
