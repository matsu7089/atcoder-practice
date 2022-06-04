const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))

const sorted = [...A].sort((a, b) => a - b)

const arr1 = Array.from({ length: K }, () => [])
const arr2 = Array.from({ length: K }, () => [])

A.forEach((v, i) => {
  arr1[i % K].push(v)
})

sorted.forEach((v, i) => {
  arr2[i % K].push(v)
})

let ans = true

for (let i = 0; i < K; i++) {
  arr1[i].sort((a, b) => a - b)
  arr2[i].sort((a, b) => a - b)

  arr1[i].forEach((v, j) => {
    if (v !== arr2[i][j]) ans = false
  })
}

console.log(ans ? 'Yes' : 'No')
