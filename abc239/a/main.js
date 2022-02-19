const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const H = parseInt(input[0])
const ans = Math.sqrt((12800000 + H) * H)

console.log(ans)
