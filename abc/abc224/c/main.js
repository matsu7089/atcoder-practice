const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const X = Array(N)
const Y = Array(N)

for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map((v) => parseInt(v))
  X[i] = x
  Y[i] = y
}

let ans = 0
for (let p1 = 0; p1 < N; p1++) {
  for (let p2 = p1 + 1; p2 < N; p2++) {
    for (let p3 = p2 + 1; p3 < N; p3++) {
      const ax = BigInt(X[p2] - X[p1])
      const ay = BigInt(Y[p2] - Y[p1])
      const bx = BigInt(X[p3] - X[p1])
      const by = BigInt(Y[p3] - Y[p1])

      if (ax * by - ay * bx !== 0n) {
        ans++
      }
    }
  }
}

console.log(ans)
