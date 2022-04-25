const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]
const [a, b] = input[1].split(' ').map((v) => parseInt(v))

const s1 = S.charAt(a - 1)
const s2 = S.charAt(b - 1)

const arr = S.split('')
arr[a - 1] = s2
arr[b - 1] = s1

console.log(arr.join(''))
