const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [S, T] = input[0].split(' ')
const sorted = [S, T].sort()

const ans = sorted[0] === S ? 'Yes' : 'No'
console.log(ans)
