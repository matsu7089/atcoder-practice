const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [a, b, d] = input[0].split(' ').map((v) => parseInt(v))

const len = Math.sqrt(a * a + b * b)
const rad = Math.atan2(b, a) + d * (Math.PI / 180)
let x = Math.cos(rad) * len
let y = Math.sin(rad) * len

console.log(x, y)
