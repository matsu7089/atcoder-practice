const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const n = BigInt(input[0])
const ans = 2n ** n > n ** 2n

console.log(ans ? 'Yes' : 'No')
