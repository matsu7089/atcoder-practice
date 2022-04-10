const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const num = N >= 42 ? N + 1 : N

const ans = 'AGC' + ('00' + num).slice(-3)
console.log(ans)
