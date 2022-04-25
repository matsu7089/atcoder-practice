const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const P = input[0].split(' ').map((v) => parseInt(v))

const a = 'a'.charCodeAt(0)

const codes = P.map((v) => v + a - 1)
const ans = String.fromCharCode(...codes)

console.log(ans)
