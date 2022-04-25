const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]

let ans = 0
for (let i = 0; i <= 9; i++) {
  if (S.indexOf(i) === -1) ans = i
}

console.log(ans)
