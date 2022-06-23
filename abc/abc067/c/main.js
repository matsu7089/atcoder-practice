const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

const sumX = [A[0]]
const sumY = [A[N - 1]]
for (let i = 1; i < N; i++) {
  sumX.push(sumX[i - 1] + A[i])
  sumY.push(sumY[i - 1] + A[N - i - 1])
}

let diff = Infinity
for (let i = 0; i < N - 1; i++) {
  const d = Math.abs(sumX[i] - sumY[N - i - 2])
  if (d < diff) {
    diff = d
  }
}

console.log(diff)
