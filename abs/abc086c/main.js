const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const ans = (() => {
  let [ct, cx, cy] = [0, 0, 0]

  for (let i = 1; i <= N; i++) {
    const [t, x, y] = input[i].split(' ').map((v) => parseInt(v))
    const dt = t - ct
    const dx = Math.abs(x - cx)
    const dy = Math.abs(y - cy)

    if (dt < dx + dy || (dt - dx - dy) % 2 !== 0) {
      return false
    }

    ;[ct, cx, cy] = [t, x, y]
  }

  return true
})()

console.log(ans ? 'Yes' : 'No')
