const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const X = Array(N + 1)
const Y = Array(N + 1)

const xDict = {}
const yDict = {}
const xyDict = {}

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map((v) => parseInt(v))
  X[i] = x
  Y[i] = y

  if (xDict[x]) {
    xDict[x].push(i)
  } else {
    xDict[x] = [i]
  }

  if (yDict[y]) {
    yDict[y].push(i)
  } else {
    yDict[y] = [i]
  }

  xyDict[x + ',' + y] = true
}

let ans = 0

for (let a = 1; a <= N; a++) {
  const bArr = xDict[X[a]]
  const cArr = yDict[Y[a]]

  bArr.forEach((b) => {
    if (a === b) return
    cArr.forEach((c) => {
      if (a === c || b === c) return

      const dx = X[c]
      const dy = Y[b]

      if (xyDict[dx + ',' + dy]) ans++
    })
  })
}

console.log(ans / 4)
