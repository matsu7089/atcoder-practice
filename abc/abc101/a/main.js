const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const S = input[0]

const numOfPlus = S.split('').filter((v) => v === '+').length
const ans = numOfPlus - (4 - numOfPlus)

console.log(ans)
