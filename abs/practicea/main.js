const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const a = parseInt(input[0])
const [b, c] = input[1].split(' ').map((v) => parseInt(v))
const s = input[2]

console.log(a + b + c, s)
