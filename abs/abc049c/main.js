const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

let S = input[0]

while (S !== '') {
  const len = S.length

  const last7 = S.slice(len - 7, len)
  if (last7 === 'dreamer') {
    S = S.slice(0, len - 7)
    continue
  }

  const last6 = S.slice(len - 6, len)
  if (last6 === 'eraser') {
    S = S.slice(0, len - 6)
    continue
  }

  const last5 = S.slice(len - 5, len)
  if (last5 === 'dream' || last5 === 'erase') {
    S = S.slice(0, len - 5)
    continue
  }

  break
}

console.log(S === '' ? 'YES' : 'NO')
