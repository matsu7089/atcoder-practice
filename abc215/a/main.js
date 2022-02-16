const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]

console.log(S === 'Hello,World!' ? 'AC' : 'WA')
