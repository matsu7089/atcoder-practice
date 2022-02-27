const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => parseInt(v))
const B = input[2].split(' ').map((v) => parseInt(v))

const ans = B.every((b) => {
  const ai = A.findIndex((v) => v === b)
  if (ai === -1) return false

  A[ai] = null
  return true
})

console.log(ans ? 'Yes' : 'No')
