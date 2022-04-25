const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [x1, y1, x2, y2] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  const set = new Set([
    `${x1 + 1}-${y1 + 2}`,
    `${x1 + 2}-${y1 + 1}`,
    `${x1 + 2}-${y1 - 1}`,
    `${x1 + 1}-${y1 - 2}`,
    `${x1 - 1}-${y1 - 2}`,
    `${x1 - 2}-${y1 - 1}`,
    `${x1 - 2}-${y1 + 1}`,
    `${x1 - 1}-${y1 + 2}`,
  ])

  return [
    `${x2 + 1}-${y2 + 2}`,
    `${x2 + 2}-${y2 + 1}`,
    `${x2 + 2}-${y2 - 1}`,
    `${x2 + 1}-${y2 - 2}`,
    `${x2 - 1}-${y2 - 2}`,
    `${x2 - 2}-${y2 - 1}`,
    `${x2 - 2}-${y2 + 1}`,
    `${x2 - 1}-${y2 + 2}`,
  ].some((v) => set.has(v))
})()

console.log(ans ? 'Yes' : 'No')
