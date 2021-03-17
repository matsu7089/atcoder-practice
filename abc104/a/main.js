const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const R = parseInt(input[0])

const ans = R < 1200 ? 'ABC' : R < 2800 ? 'ARC' : 'AGC'
console.log(ans)
