const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [H, W, N] = input[0].split(' ').map((v) => parseInt(v))

const wSet = new Set()
const hSet = new Set()

for (let i = 1; i <= N; i++) {
  const [A, B] = input[i].split(' ').map((v) => parseInt(v))
  wSet.add(A)
  hSet.add(B)
}

const hDict = [...wSet]
  .sort((a, b) => a - b)
  .reduce((a, c, i) => {
    a[c] = i + 1
    return a
  }, {})

const wDict = [...hSet]
  .sort((a, b) => a - b)
  .reduce((a, c, i) => {
    a[c] = i + 1
    return a
  }, {})

for (let i = 1; i <= N; i++) {
  const [A, B] = input[i].split(' ').map((v) => parseInt(v))
  console.log(hDict[A], wDict[B])
}
