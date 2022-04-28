const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const K = BigInt(input[0])

const ans = K.toString(2).replace(/1/g, '2')
console.log(ans)
