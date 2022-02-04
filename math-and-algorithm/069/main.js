const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [a, b, c, d] = input[0].split(' ').map((v) => BigInt(v))

const ans = [a * c, a * d, b * c, b * d].reduce((a, c) => (a < c ? c : a))
console.log(ans.toString())
