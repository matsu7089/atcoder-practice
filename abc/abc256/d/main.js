const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const LR = []

for (let i = 0; i < N; i++) {
  LR.push(input[i + 1].split(' ').map((v) => parseInt(v)))
}

LR.sort((a, b) => a[0] - b[0])

const ans = [[...LR[0]]]

for (let i = 1; i < N; i++) {
  const [l, r] = LR[i]

  const e = ans.length
  if (ans[e - 1][1] < l) {
    ans.push([l, r])
    continue
  }

  for (let j = e - 1; j >= 0; j--) {
    const a = ans[j]

    if (a[0] <= l && l <= a[1]) {
      a[1] = Math.max(a[1], r)
      include = true
      break
    }
  }
}

console.log(ans.map((v) => v.join(' ')).join('\n'))
