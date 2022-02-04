const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [H, W] = input[0].split(' ').map((v) => parseInt(v))

const A = []
for (let i = 1; i <= H; i++) {
  A.push(input[i].split(' ').map((v) => parseInt(v)))
}

const sumH = []
const sumW = []
for (let i = 0; i < H; i++) {
  sumH.push(A[i].reduce((a, c) => a + c))
}
for (let i = 0; i < W; i++) {
  sumW.push(A.reduce((a, c) => a + c[i], 0))
}

for (let i = 0; i < H; i++) {
  const row = []
  for (let j = 0; j < W; j++) {
    row.push(sumH[i] + sumW[j] - A[i][j])
  }
  console.log(row.join(' '))
}
