const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, X] = input[0].split(' ').map((v) => parseInt(v))

const AB = []
const ABS = []
for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map((v) => parseInt(v))
  AB.push([a, b])
  ABS.push(a + b)
}

const sum = [ABS[0]]
for (let i = 1; i < N; i++) {
  sum.push(sum[i - 1] + ABS[i])
}

let ans = Infinity
for (let i = 0; i < N; i++) {
  const r = X - i - 1
  if (r <= 0) continue
  const t = sum[i] + AB[i][1] * r

  ans = Math.min(ans, t)
}

console.log(ans)
