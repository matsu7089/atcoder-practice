const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = BigInt(input[0])

const ans = (() => {
  let loseNum = 1n
  let add = 2n

  while (true) {
    if (N === loseNum) {
      return false
    }
    if (N < loseNum) {
      return true
    }
    loseNum += add
    add = add * 2n
  }
})()

console.log(ans ? 'First' : 'Second')
