const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const T = input[1].split(' ').map((v) => BigInt(v))

const minA = (ti, cur) => {
  const min = 1n << ti

  if (cur < min) {
    return min
  }

  const d = (cur - min) / (min << 1n)
  return ((d + 1n) << (ti + 1n)) | min
}

let cur = 0n
for (let i = 0; i < N; i++) {
  cur = minA(T[i], cur)
}

console.log(cur.toString())
