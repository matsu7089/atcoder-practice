const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, Q] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))

const dict = A.reduce((a, c, i) => {
  if (a[c]) {
    a[c].push(i)
  } else {
    a[c] = [i]
  }
  return a
}, {})

const ans = []

for (let i = 0; i < Q; i++) {
  const [x, k] = input[i + 2].split(' ').map((v) => parseInt(v))

  const arr = dict[x] || []
  ans.push(arr[k - 1] === undefined ? -1 : arr[k - 1] + 1)
}

console.log(ans.join('\n'))
