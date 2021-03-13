const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const N = parseInt(input[0])

const S = (num) => {
  return num
    .toString()
    .split('')
    .reduce((a, c) => {
      return a + parseInt(c)
    }, 0)
}

const ans = N % S(N) === 0 ? 'Yes' : 'No'
console.log(ans)
