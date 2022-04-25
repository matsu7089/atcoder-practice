const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const X = parseInt(input[0])

const ans = (() => {
  if (X < 40) {
    return 40 - X
  }
  if (X < 70) {
    return 70 - X
  }
  if (X < 90) {
    return 90 - X
  }
  return 'expert'
})()

console.log(ans)
