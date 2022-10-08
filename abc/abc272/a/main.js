const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => parseInt(v))

const ans = A.reduce((a, c) => a + c)

console.log(ans)
