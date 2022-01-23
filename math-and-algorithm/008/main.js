const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, S] = input[0].split(' ').map((v) => parseInt(v))

let ans = 0
for (let n1 = 1; n1 <= N; n1++) {
  for (let n2 = 1; n2 <= N; n2++) {
    if (n1 + n2 <= S) {
      ans++
    }
  }
}

console.log(ans)
