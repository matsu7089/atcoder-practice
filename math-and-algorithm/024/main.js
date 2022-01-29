const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

let ans = 0
for (let i = 1; i <= N; i++) {
  const [P, Q] = input[i].split(' ').map((v) => parseInt(v))
  ans += (1 / P) * Q
}

console.log(ans)
