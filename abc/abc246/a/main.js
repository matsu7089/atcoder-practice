const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [x1, y1] = input[0].split(' ').map((v) => parseInt(v))
const [x2, y2] = input[1].split(' ').map((v) => parseInt(v))
const [x3, y3] = input[2].split(' ').map((v) => parseInt(v))

const xDict = {}
;[x1, x2, x3].forEach((x) => {
  if (xDict[x] === undefined) {
    xDict[x] = 1
  } else {
    xDict[x]++
  }
})

const yDict = {}
;[y1, y2, y3].forEach((y) => {
  if (yDict[y] === undefined) {
    yDict[y] = 1
  } else {
    yDict[y]++
  }
})

const x = Object.keys(xDict).find((key) => xDict[key] === 1)
const y = Object.keys(yDict).find((key) => yDict[key] === 1)

console.log(x, y)
