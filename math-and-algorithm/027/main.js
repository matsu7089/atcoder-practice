const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))
const C = Array(N)

const MergeSort = (l, r) => {
  if (r - l === 1) return

  const m = Math.floor((l + r) / 2)
  MergeSort(l, m)
  MergeSort(m, r)

  let c1 = l
  let c2 = m
  let cnt = 0
  while (c1 !== m || c2 !== r) {
    if (c1 === m) {
      C[cnt] = A[c2]
      c2++
    } else if (c2 === r) {
      C[cnt] = A[c1]
      c1++
    } else if (A[c2] < A[c1]) {
      C[cnt] = A[c2]
      c2++
    } else {
      C[cnt] = A[c1]
      c1++
    }
    cnt++
  }

  for (let i = 0; i < cnt; i++) {
    A[l + i] = C[i]
  }
}

MergeSort(0, N)
console.log(A.join(' '))
