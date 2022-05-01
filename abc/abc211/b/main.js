const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const set = new Set(['H', '2B', '3B', 'HR'])

for (let i = 0; i < 4; i++) {
  set.delete(input[i])
}

console.log(set.size ? 'No' : 'Yes')
