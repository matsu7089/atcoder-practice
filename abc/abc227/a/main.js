const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K, A] = input[0].split(' ').map((v) => parseInt(v))

console.log(((A - 1 + K - 1) % N) + 1)
