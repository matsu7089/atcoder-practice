const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const X = BigInt(input[0])

const ans = (() => {
  if (X < 0) {
    const str = input[0]
    const n1 = parseInt(str[str.length - 1])

    if (n1 !== 0) {
      return X / 10n - 1n
    }
  }
  return X / 10n
})()

console.log(ans.toString())
