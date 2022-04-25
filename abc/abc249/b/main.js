const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]

const len = S.length
let u = false
let l = false
let d = false

const uReg = /[A-Z]/
const set = new Set()

for (let i = 0; i < len; i++) {
  const s = S[i]

  if (uReg.test(s)) {
    u = true
  } else {
    l = true
  }

  if (set.has(s)) {
    d = true
  }
  set.add(s)
}

console.log(u && l && !d ? 'Yes' : 'No')
