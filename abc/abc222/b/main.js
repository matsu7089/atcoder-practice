const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, P] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))

const ans = A.filter((a) => a < P).length
console.log(ans)
