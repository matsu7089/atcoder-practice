const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const S = input[0]
const K = parseInt(input[1])

let ans = '1'
for (let i = 0; i < K; i++) {
  const str = S.slice(i, i + 1)
  if (str !== '1') {
    ans = str
    break
  }
}

console.log(ans)
