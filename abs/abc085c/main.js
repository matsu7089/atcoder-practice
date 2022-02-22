const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, Y] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  for (let x = 0; x <= N; x++) {
    for (let y = 0; y <= N - x; y++) {
      const z = N - x - y
      if (x * 10000 + y * 5000 + z * 1000 === Y) {
        return [x, y, z].join(' ')
      }
    }
  }
  return '-1 -1 -1'
})()

console.log(ans)
