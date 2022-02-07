const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, S] = input

let dep = 0
const dict = { '(': 1, ')': -1 }

const ans = (() => {
  for (let i = 0; i < N; i++) {
    dep += dict[S.charAt(i)]
    if (dep < 0) return false
  }
  return dep === 0
})()

console.log(ans ? 'Yes' : 'No')
