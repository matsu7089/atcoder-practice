const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [H, W] = input[0].split(' ').map((v) => parseInt(v))

const A = []
for (let i = 0; i < H; i++) {
  A.push(input[i + 1].split(' ').map((v) => parseInt(v)))
}

let ans = 0
const task = [{ x: 0, y: 0, set: new Set([A[0][0]]) }]

const lh = H - 1
const lw = W - 1

while (task.length) {
  const t = task.pop()

  if (t.x !== lw && !t.set.has(A[t.y][t.x + 1])) {
    task.push({
      x: t.x + 1,
      y: t.y,
      set: new Set([A[t.y][t.x + 1], ...t.set]),
    })
  }

  if (t.y !== lh && !t.set.has(A[t.y + 1][t.x])) {
    task.push({
      x: t.x,
      y: t.y + 1,
      set: new Set([A[t.y + 1][t.x], ...t.set]),
    })
  }

  if (t.x === lw && t.y === lh) {
    ans++
  }
}

console.log(ans)
