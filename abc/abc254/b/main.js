const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const arr = []

for (let i = 0; i < N; i++) {
  arr.push([])

  for (let j = 0; j < i + 1; j++) {
    if (j === 0 || j === i) {
      arr[i].push(1)
    } else {
      arr[i].push(arr[i - 1][j - 1] + arr[i - 1][j])
    }
  }
}

console.log(arr.map((r) => r.join(' ')).join('\n'))
