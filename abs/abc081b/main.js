const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

let ans = 0
w: while (true) {
  for (let i = 0; i < N; i++) {
    if (A[i] % 2 === 0) {
      A[i] /= 2
    } else {
      break w
    }
  }
  ans++
}

console.log(ans)
