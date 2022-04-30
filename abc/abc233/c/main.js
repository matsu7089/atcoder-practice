const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, X] = input[0].split(' ').map((v) => BigInt(v))
const LA = []

for (let i = 0; i < N; i++) {
  LA.push(input[i + 1].split(' ').map((v) => BigInt(v)))
}

let ans = 0
const task = [{ n: -1n, m: 1n }]

while (task.length) {
  const t = task.pop()
  const n = t.n + 1n

  if (t.m > X) {
    continue
  }

  if (n === N) {
    t.m === X && ans++
    continue
  }

  const [L, ...A] = LA[n]

  for (let i = 0; i < L; i++) {
    task.push({ n, m: t.m * A[i] })
  }
}

console.log(ans)
