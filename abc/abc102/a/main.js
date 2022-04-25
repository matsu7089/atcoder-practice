const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const N = parseInt(input[0])

let ans
if (N % 2 === 0) {
  ans = N
} else {
  ans = N * 2
}

console.log(ans)
