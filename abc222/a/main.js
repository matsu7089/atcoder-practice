const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = input[0]

console.log(('000' + N).slice(-4))
