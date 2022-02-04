const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [H, W] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  if (H === 1 || W === 1) return 1

  const mul = H * W
  return mul - Math.floor(mul / 2)
})()

console.log(ans)
