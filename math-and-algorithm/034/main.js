const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const P = []

for (let i = 1; i <= N; i++) {
  P.push(input[i].split(' ').map((v) => parseInt(v)))
}

let ans = Infinity
for (let i = 0; i < N; i++) {
  const a = P[i]

  for (let j = i + 1; j < N; j++) {
    const b = P[j]

    const dist = Math.sqrt(
      Math.abs(a[0] - b[0]) ** 2 + Math.abs(a[1] - b[1]) ** 2
    )
    ans = Math.min(ans, dist)
  }
}

console.log(ans)
