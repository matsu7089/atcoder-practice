const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, X] = input[0].split(' ').map((v) => parseInt(v))

let str = ''
for (let i = 0; i < 26; i++) {
  for (let j = 0; j < N; j++) {
    str += String.fromCharCode(65 + i)
  }
}

console.log(str[X - 1])
