const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const t = parseInt(input[0])
const f = (x) => x ** 2 + x * 2 + 3

const ans = f(f(f(t) + t) + f(f(t)))
console.log(ans)
