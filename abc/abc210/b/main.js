const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[1]

const ans = S.indexOf('1') % 2 === 0 ? 'Takahashi' : 'Aoki'
console.log(ans)
