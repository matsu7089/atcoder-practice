const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, A, X, Y] = input[0].split(' ').map((v) => parseInt(v))

let ans = 0

if (A < N) {
  ans = A * X + (N - A) * Y
} else {
  ans = N * X
}

console.log(ans)
