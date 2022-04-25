const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [H, W] = input[0].split(' ').map((v) => parseInt(v))

const A = Array(H)
for (let i = 0; i < H; i++) {
  A[i] = input[i + 1].split(' ').map((v) => parseInt(v))
}

let ans = true
for (let i1 = 0; i1 < H; i1++) {
  for (let i2 = i1 + 1; i2 < H; i2++) {
    for (let j1 = 0; j1 < W; j1++) {
      for (let j2 = j1 + 1; j2 < W; j2++) {
        if (A[i1][j1] + A[i2][j2] > A[i2][j1] + A[i1][j2]) {
          ans = false
        }
      }
    }
  }
}

console.log(ans ? 'Yes' : 'No')
