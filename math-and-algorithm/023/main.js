const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const B = input[1].split(' ').map((v) => parseInt(v))
const R = input[2].split(' ').map((v) => parseInt(v))

const b = B.reduce((a, c) => a + c) / N
const r = R.reduce((a, c) => a + c) / N

console.log(b + r)
