const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const K = parseInt(input[0])

const ans = (() => {
  if (K >= 60) {
    return '22:' + ('0' + (K - 60)).slice(-2)
  } else {
    return '21:' + ('0' + K).slice(-2)
  }
})()

console.log(ans)
