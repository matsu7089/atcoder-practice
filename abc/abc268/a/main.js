const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B, C, D, E] = input[0].split(' ').map((v) => parseInt(v))

const set = new Set([A, B, C, D, E])

console.log(set.size)
