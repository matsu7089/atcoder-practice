const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = BigInt(input[0])

const ans = N === 1n ? 0n : ((N - 1n) * N) / 2n
console.log(ans.toString())
