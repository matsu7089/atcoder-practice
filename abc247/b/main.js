const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const s = []
const t = []

for (let i = 0; i < N; i++) {
  const [si, ti] = input[i + 1].split(' ')
  s.push(si)
  t.push(ti)
}

let ans = true

for (let i = 0; i < N; i++) {
  const si = s[i]
  const ti = t[i]

  let b1 = false
  let b2 = false

  for (let j = 0; j < N; j++) {
    if (i === j) continue

    const sj = s[j]
    const tj = t[j]

    if (si === sj || si === tj) {
      b1 = true
    }
    if (ti === sj || ti === tj) {
      b2 = true
    }
  }

  if (b1 && b2) ans = false
}

console.log(ans ? 'Yes' : 'No')
