const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v) - 1)
const X = []
const Y = []

for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 2].split(' ').map((v) => parseInt(v))
  X.push(x)
  Y.push(y)
}

const set = new Set(A)
const dist = Array(N).fill(Infinity)

A.forEach((a) => {
  const ax = X[a]
  const ay = Y[a]

  for (let i = 0; i < N; i++) {
    if (set.has(i)) continue
    const d = Math.abs(ax - X[i]) ** 2 + Math.abs(ay - Y[i]) ** 2
    if (dist[i] > d) {
      dist[i] = d
    }
  }
})

const maxDist = dist.reduce((a, c, i) => {
  if (set.has(i)) return a
  return Math.max(a, c)
}, 0)

console.log(Math.pow(maxDist, 1 / 2))
