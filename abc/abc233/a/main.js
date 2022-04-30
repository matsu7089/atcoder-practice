const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [X, Y] = input[0].split(' ').map((v) => parseInt(v))

const r = Y - X
const ans = r > 0 ? Math.ceil(r / 10) : 0

console.log(ans)
