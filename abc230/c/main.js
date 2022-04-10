const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, A, B] = input[0].split(' ').map((v) => BigInt(v))
const [P, Q, R, S] = input[1].split(' ').map((v) => BigInt(v))

const h = Q - P + 1n
const w = S - R + 1n

const cell = Array.from({ length: Number(h) }, () => Array(Number(w)).fill('.'))

const centerY = A - P
const centerX = B - R

for (let i = 0; i < h; i++) {
  const diff = centerY - BigInt(i)

  const p1 = centerX - diff
  const p2 = centerX + diff

  if (0 <= p1 && p1 < w) {
    cell[i][Number(p1)] = '#'
  }
  if (0 <= p2 && p2 < w) {
    cell[i][Number(p2)] = '#'
  }
}

const ans = cell.map((row) => row.join('')).join('\n')
console.log(ans)
