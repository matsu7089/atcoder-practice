const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const S = input[0]

const solver = () => {
  if (S.slice(0, 1) !== 'A') {
    return 'WA'
  }

  const cnt = S.slice(2, S.length - 1)
    .split('')
    .reduce((a, c) => {
      if (c === 'C') {
        return a + 1
      } else {
        return a
      }
    }, 0)

  if (cnt !== 1) {
    return 'WA'
  }

  if (!/^[a-z|A|C]+$/.test(S)) {
    return 'WA'
  }

  return 'AC'
}

console.log(solver())
