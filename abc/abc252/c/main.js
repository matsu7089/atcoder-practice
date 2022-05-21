const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const S = []

for (let i = 0; i < N; i++) {
  const s = input[i + 1].split('').reduce((a, c, i) => {
    a[c] = i
    return a
  }, {})

  S.push(s)
}

let ans = Infinity

for (let target = 0; target < 10; target++) {
  const stopped = Array(S).fill(false)
  let remain = N
  let cur = 0

  while (remain) {
    let min = Infinity
    let select = null

    S.forEach((s, i) => {
      if (stopped[i]) return

      const t = ((s[target] - (cur % 10) + 10) % 10) + 1
      if (t < min) {
        min = t
        select = i
      }
    })

    cur += min
    stopped[select] = true
    remain--
  }

  if (cur - 1 < ans) {
    ans = cur - 1
  }
}

console.log(ans)
