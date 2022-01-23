const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A1, A2, A3] = input[0].split(' ').map((v) => parseInt(v))
console.log(A1 * A2 * A3)
