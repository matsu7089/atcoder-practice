const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B] = input[0].split(' ').map((v) => parseInt(v))

const ans = A % 3 === 0 || B % 3 === 0 || (A + B) % 3 === 0

console.log(ans ? 'Possible' : 'Impossible')
