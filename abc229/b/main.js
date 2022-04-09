const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B] = input[0].split(' ')

const e = Math.min(A.length, B.length)

let ans = 'Easy'
for (let i = 1; i <= e; i++) {
  const s = parseInt(A[A.length - i]) + parseInt(B[B.length - i])
  if (s >= 10) {
    ans = 'Hard'
  }
}

console.log(ans)
