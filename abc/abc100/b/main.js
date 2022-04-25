const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
let [D, N] = input[0].split(' ').map((v) => parseInt(v))

if (N === 100) {
  N = 101
}
const ans = Math.pow(100, D) * N
console.log(ans)
