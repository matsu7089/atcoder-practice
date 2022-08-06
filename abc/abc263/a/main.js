const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B, C, D, E] = input[0].split(' ').map((v) => parseInt(v))

const dict = [A, B, C, D, E].reduce((a, c) => {
  if (a[c]) {
    a[c]++
  } else {
    a[c] = 1
  }
  return a
}, {})

const keys = Object.keys(dict)
const ans = keys.length === 2 && (dict[keys[0]] === 2 || dict[keys[1]] === 2)

console.log(ans ? 'Yes' : 'No')
