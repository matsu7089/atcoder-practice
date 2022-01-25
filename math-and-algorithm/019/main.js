const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => parseInt(v))

const cnt = {
  1: 0,
  2: 0,
  3: 0,
}

A.forEach((a) => {
  cnt[a]++
})

const ans = [1, 2, 3].reduce((acc, color) => {
  return acc + (cnt[color] * (cnt[color] - 1)) / 2
}, 0)

console.log(ans)
