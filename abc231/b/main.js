const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const dict = {}

for (let i = 0; i < N; i++) {
  const s = input[i + 1]

  if (dict[s]) {
    dict[s]++
  } else {
    dict[s] = 1
  }
}

let ans = ''
let max = 0

Object.keys(dict).forEach((s) => {
  if (max < dict[s]) {
    ans = s
    max = dict[s]
  }
})

console.log(ans)
