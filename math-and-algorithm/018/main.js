const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => parseInt(v))

const cnt = {
  100: 0,
  200: 0,
  300: 0,
  400: 0,
}

A.forEach((a) => {
  cnt[a]++
})

const ans = cnt[100] * cnt[400] + cnt[200] * cnt[300]
console.log(ans)
