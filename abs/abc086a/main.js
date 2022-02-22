const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [a, b] = input[0].split(' ').map((v) => parseInt(v))

console.log((a * b) % 2 === 0 ? 'Even' : 'Odd')
