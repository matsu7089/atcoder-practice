const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B, C] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  for (let i = C; i <= B; i += C) {
    if (A <= i && i <= B) return i
  }
  return -1
})()

console.log(ans)
