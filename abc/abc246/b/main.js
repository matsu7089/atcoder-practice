const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B] = input[0].split(' ').map((v) => parseInt(v))

const rad = Math.atan(B / A)
const x = Math.cos(rad)
const y = Math.sin(rad)

console.log(x, y)
