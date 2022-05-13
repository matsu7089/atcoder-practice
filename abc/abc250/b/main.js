const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, A, B] = input[0].split(' ').map((v) => parseInt(v))

const ans = []

let w = ''
let b = ''
for (let i = 0; i < B; i++) {
  w += '.'
  b += '#'
}

let r1 = ''
let r2 = ''
for (let i = 0; i < N; i++) {
  r1 += i % 2 === 0 ? w : b
  r2 += i % 2 === 0 ? b : w
}

for (let i = 0; i < N; i++) {
  const r = i % 2 === 0 ? r1 : r2
  for (let j = 0; j < A; j++) {
    ans.push(r)
  }
}

console.log(ans.join('\n'))
