const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const H = input[1].split(' ').map((v) => parseInt(v))

let cur = H[0]
for (let i = 1; i < N; i++) {
  if (cur < H[i]) {
    cur = H[i]
  } else {
    break
  }
}

console.log(cur)
