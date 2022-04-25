const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const S = input[0]
const T = input[1]

const len = S.length

const solver = () => {
  if (S === T) return 'Yes'

  for (let i = 1; i < len; i++) {
    const str = T.slice(-i) + T.slice(0, -i + len)
    if (S === str) return 'Yes'
  }

  return 'No'
}

console.log(solver())
