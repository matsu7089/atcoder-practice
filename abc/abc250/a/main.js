const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [H, W] = input[0].split(' ').map((v) => parseInt(v))
const [R, C] = input[1].split(' ').map((v) => parseInt(v))

const ans = (() => {
  const ud = H === 1 ? 0 : R === 1 || R === H ? 1 : 2
  const lr = W === 1 ? 0 : C === 1 || C === W ? 1 : 2
  return ud + lr
})()

console.log(ans)
