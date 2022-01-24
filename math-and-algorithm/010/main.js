const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

let ans = 1
for (let i = 1; i <= N; i++) {
  ans *= i
}

console.log(ans)
