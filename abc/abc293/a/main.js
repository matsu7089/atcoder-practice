const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]
let ans = ''

for (let i = 0; i < S.length; i++) {
  if (i % 2 === 0) {
    ans += S[i + 1]
  } else {
    ans += S[i - 1]
  }
}

console.log(ans)
