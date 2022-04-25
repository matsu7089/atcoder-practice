const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [X, Y] = input[0].split('.').map((v) => parseInt(v))

const ans = (() => {
  if (Y <= 2) return X + '-'
  if (Y <= 6) return X
  if (Y <= 9) return X + '+'
})()

console.log(ans)
