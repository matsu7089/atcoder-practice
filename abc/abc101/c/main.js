const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const [N, K] = input[0].split(' ').map((v) => parseInt(v))

console.log(Math.ceil((N - 1) / (K - 1)))
