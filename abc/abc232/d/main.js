const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [H, W] = input[0].split(' ').map((v) => parseInt(v))
const C = []

for (let i = 0; i < H; i++) {
  C.push(input[i + 1].split('').map((v) => (v === '.' ? 0 : null)))
}

C[0][0] = 1
let ans = 1

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (C[y][x] === null) continue

    const top = y > 0 ? C[y - 1][x] : 0
    const left = C[y][x - 1] || 0

    if (!top && !left) continue

    C[y][x] = Math.max(top, left) + 1
    ans = Math.max(ans, C[y][x])
  }
}

console.log(ans)
