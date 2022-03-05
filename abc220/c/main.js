const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => BigInt(v))
const X = BigInt(input[2])

const sumA = A.reduce((a, c) => a + c)

let k = (X / sumA) * BigInt(A.length)
let sum = sumA * (X / sumA)

let i = 0
while (sum <= X) {
  sum += A[i++]
  k++
}

console.log(k.toString())
