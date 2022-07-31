const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const Y = parseInt(input[0])

let ans = Y

switch (Y % 4) {
  case 1:
    ans += 1
    break
  case 0:
    ans += 2
    break
  case 3:
    ans += 3
    break
}

console.log(ans)
