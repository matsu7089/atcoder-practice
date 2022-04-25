const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => parseInt(v))

const ans = new Set(A).size
console.log(ans)
