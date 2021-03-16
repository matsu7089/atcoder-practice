const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const A = input[0].split(' ').map((v) => parseInt(v))
const [B1, B2, B3] = A.sort((a, b) => a - b)

const ans = B2 - B1 + (B3 - B2)
console.log(ans)
