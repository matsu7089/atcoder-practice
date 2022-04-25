const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const a = input[0].split(' ').map((v) => parseInt(v))

let cur = 0
for (let i = 0; i < 3; i++) {
  cur = a[cur]
}

console.log(cur)
