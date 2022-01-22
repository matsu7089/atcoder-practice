const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))
const B = input[2]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((a, b) => a - b)

const search = (value) => {
  let low = 0
  let high = B.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (B[mid] === value) {
      return 0
    }
    if (B[mid] < value) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  if (B[low] === undefined) {
    return Math.abs(B[high] - value)
  }
  if (B[high] === undefined) {
    return Math.abs(B[low] - value)
  }

  return Math.min(Math.abs(B[low] - value), Math.abs(B[high] - value))
}

let ans = Infinity
for (let a = 0; a < N; a++) {
  ans = Math.min(ans, search(A[a]))
}

console.log(ans)
