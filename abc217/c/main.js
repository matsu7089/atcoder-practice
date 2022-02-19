const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const P = input[1].split(' ').map((v) => parseInt(v))

const ans = Array(N)
P.forEach((p, i) => {
  ans[p - 1] = i + 1
})

console.log(ans.join(' '))
