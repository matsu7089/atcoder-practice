const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v)).reverse()

const sum = [A[0]]

for (let i=1; i < N; i++) {
  sum.push(sum[i-1] + A[i])
}

const ans = sum.reduce((a, c) => {
  return c >= 4 ? a + 1 : a
}, 0)

console.log(ans)
