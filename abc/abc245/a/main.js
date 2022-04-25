const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B, C, D] = input[0].split(' ').map((v) => parseInt(v))

console.log(C < A || (C === A && D < B) ? 'Aoki' : 'Takahashi')
