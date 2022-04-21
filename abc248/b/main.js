const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B, K] = input[0].split(' ').map((v) => parseInt(v))

let a = A
let ans = 0

while (a < B) {
  a *= K
  ans++
}

console.log(ans)
