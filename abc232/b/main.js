const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = input[0]
const T = input[1]

const diff = T.charCodeAt(0) - N.charCodeAt(0)
let str = ''
const len = N.length

for (let i = 0; i < len; i++) {
  const c = N.charCodeAt(i) - 97
  str += String.fromCharCode(97 + ((c + diff + 26) % 26))
}

console.log(T === str ? 'Yes' : 'No')
