const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

let N = BigInt(input[0])

const range = 2n ** 31n
const ans = -range <= N && N < range ? 'Yes' : 'No'

console.log(ans)
