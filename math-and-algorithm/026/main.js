const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

let ans = 0
for (let i = N; i > 0; i--) {
  ans += N / i
}

console.log(ans)
