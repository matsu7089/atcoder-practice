const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => parseInt(v))

const cnt = {}
A.forEach((a) => {
  if (cnt[a]) {
    cnt[a]++
  } else {
    cnt[a] = 1
  }
})

let ans = 0

Object.keys(cnt)
  .map((v) => parseInt(v))
  .filter((v) => v < 50000)
  .forEach((v) => {
    const pair = cnt[100000 - v]
    if (pair) {
      ans += cnt[v] * pair
    }
  })

if (cnt[50000] > 1) {
  ans += (cnt[50000] * (cnt[50000] - 1)) / 2
}

console.log(ans)
