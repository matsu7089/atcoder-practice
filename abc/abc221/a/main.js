const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B] = input[0].split(' ').map((v) => parseInt(v))

console.log(Math.pow(32, A - B))
