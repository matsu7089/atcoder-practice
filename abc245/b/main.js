const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => parseInt(v))

const s = new Set()
for (let i = 0; i <= 2000; i++) {
  s.add(i)
}

A.forEach((a) => {
  s.delete(a)
})

console.log([...s][0])
