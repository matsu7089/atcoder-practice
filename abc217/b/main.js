const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const contests = new Set(['ABC', 'ARC', 'AGC', 'AHC'])

for (let i = 0; i < 3; i++) {
  const S = input[i]
  contests.delete(S)
}

console.log([...contests][0])
