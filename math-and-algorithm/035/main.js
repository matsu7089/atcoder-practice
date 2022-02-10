const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [x1, y1, r1] = input[0].split(' ').map((v) => parseInt(v))
const [x2, y2, r2] = input[1].split(' ').map((v) => parseInt(v))

const ans = (() => {
  const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

  if (dist > r1 + r2) {
    return 5
  }
  if (dist === r1 + r2) {
    return 4
  }

  const [smallR, bigR] = [r1, r2].sort((a, b) => a - b)

  if (dist + smallR === bigR) {
    return 2
  }
  if (dist + smallR < bigR) {
    return 1
  }
  return 3
})()

console.log(ans)
