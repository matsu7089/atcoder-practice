const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]
const len = S.length

const pat = []
for (let i = 0; i < len; i++) {
  const str = S.slice(i, len) + S.slice(0, i)
  pat.push(str)
}
pat.sort()

const ans = [pat[0], pat[len - 1]]
console.log(ans.join('\n'))
