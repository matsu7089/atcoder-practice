const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const abc = input[0]
const [a, b, c] = abc

const ans = parseInt(abc) + parseInt(b + c + a) + parseInt(c + a + b)
console.log(ans)
