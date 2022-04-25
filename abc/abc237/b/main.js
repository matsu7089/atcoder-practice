const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [H, W] = input[0].split(' ').map((v) => parseInt(v))

const A = []

for (let i = 1; i <= H; i++) {
  A.push(input[i].split(' '))
}

for (let w = 0; w < W; w++) {
  const r = []
  for (let h = 0; h < H; h++) {
    r.push(A[h][w])
  }
  console.log(r.join(' '))
}
