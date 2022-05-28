const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [H, W] = input[0].split(' ').map((v) => parseInt(v))

let posA = null
let posB = null

for (let i = 0; i < H; i++) {
  input[i + 1].split('').forEach((v, j) => {
    if (v === '-') return

    if (!posA) {
      posA = [i, j]
    } else {
      posB = [i, j]
    }
  })
}

const ans = Math.abs(posA[0] - posB[0]) + Math.abs(posA[1] - posB[1])
console.log(ans)
