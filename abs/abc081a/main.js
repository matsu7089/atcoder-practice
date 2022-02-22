const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const ans = input[0].split('').reduce((a, c) => a + parseInt(c), 0)

console.log(ans)
