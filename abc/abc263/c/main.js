const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))

const ans = []
const task = []

for (let i = 1; i <= M; i++) {
  task.push({ str: i.toString(), last: i, len: 1 })
}

while (task.length) {
  const t = task.pop()

  if (t.len === N) {
    ans.push(t.str)
    continue
  }

  for (let i = t.last + 1; i <= M; i++) {
    task.push({
      str: t.str + ' ' + i,
      last: i,
      len: t.len + 1,
    })
  }
}

console.log(ans.reverse().join('\n'))
