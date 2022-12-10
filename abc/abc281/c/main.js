const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, T] = input[0].split(' ').map((v) => BigInt(v))
const A = input[1].split(' ').map((v) => BigInt(v))

const sum = A.reduce((a, c) => a + c)
let time = T % sum

for (let i = 0; i < N; i++) {
  if (A[i] <= time) {
    time -= A[i]
  } else {
    console.log(i + 1, time.toString())
    break
  }
}
