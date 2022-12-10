const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]

const s1 = S[0]
const s2 = S[7]
const num = parseInt(S.slice(1, 7), 10)

const reg = /[A-Z]/

let ans = false
if (reg.test(s1) && reg.test(s2) && 100000 <= num && num <= 999999) {
  ans = true
}

console.log(ans ? 'Yes' : 'No')
