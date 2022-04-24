const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B, C, D, E, F, X] = input[0].split(' ').map((v) => parseInt(v))

const t = Math.trunc(X / (A + C))
const a = Math.trunc(X / (D + F))

const t2 = Math.min(X - (A + C) * t, A)
const a2 = Math.min(X - (D + F) * a, D)

const td = (t * A + t2) * B
const ad = (a * D + a2) * E

const ans = td === ad ? 'Draw' : td < ad ? 'Aoki' : 'Takahashi'
console.log(ans)
