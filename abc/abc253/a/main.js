const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [a, b, c] = input[0].split(' ').map((v) => parseInt(v))

const arr = [a, b, c].sort((a, b) => a - b)
const ans = arr[1] === b

console.log(ans ? 'Yes' : 'No')
