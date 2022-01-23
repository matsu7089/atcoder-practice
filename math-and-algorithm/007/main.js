const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, X, Y] = input[0].split(' ').map((v) => parseInt(v))

let ans = 0
for (let n = 1; n <= N; n++) {
  if (n % X === 0 || n % Y === 0) {
    ans++
  }
}

console.log(ans)
