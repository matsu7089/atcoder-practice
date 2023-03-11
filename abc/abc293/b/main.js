const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

const arr = new Array(N + 1).fill(false)

for (let i = 1; i <= N; i++) {
  if (arr[i] == false) {
    arr[A[i - 1]] = true
  }
}

let ans = []
for (let i = 1; i <= N; i++) {
  if (arr[i] == false) {
    ans.push(i)
  }
}

console.log(ans.length)
console.log(ans.join(' '))
