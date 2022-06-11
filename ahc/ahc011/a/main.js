const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [LEFT, TOP, RIGHT, BOTTOM] = [1, 2, 4, 8]
const [N, T] = input[0].split(' ').map((v) => parseInt(v))

const cell = []
for (let i = 0; i < N; i++) {
  cell.push(...input[i + 1].split('').map((v) => parseInt(v, 16)))
}

const cellLen = cell.length
let curPos = 0

const cnt = Array(16).fill(0)
cell.forEach((v, i) => {
  cnt[v]++
  if (v === 0) {
    curPos = i
  }
})

const print = (cell) => {
  const str = cell.map((v) => v.toString(16)).join('')
  let arr = []
  for (let i = 0; i < N; i++) {
    arr.push(str.slice(i * N, i * N + N))
  }
  console.log(arr.join('\n'))
}

// 完成目標のパターン
// 右2列と下2列はタイル移動用に残す
const pat = Array(N ** 2).fill(0)

;(() => {
  // (0, 0) ┌
  ;[12, 13, 15, 14].forEach((v) => {
    if (pat[0] || cnt[v] === 0) return
    pat[0] = v
    cnt[v]--
  })

  // (0, 1～N-2) ├ or ┼ or │ or └
  const tCnt = cnt[14] + cnt[15] + cnt[10] + cnt[6]

  for (let i = 1; i < Math.min(N - 2, tCnt); i++) {
    const p = i * N
    ;[14, 15, 10, 6].forEach((v) => {
      if (pat[p] || cnt[v] === 0) return
      pat[p] = v
      cnt[v]--
    })
  }

  const p = N * (N - 2)
  ;[6, 14, 15, 2, 3, 1].forEach((v) => {
    if (pat[p] || cnt[v] === 0) return
    pat[p] = v
    cnt[v]--
  })
})()

// 完成目標パターンの最終index+1
const end = pat.length - N

// 完成目標パターン作成
for (let pos = 1; pos < end; pos++) {
  const isLeftConnect = pos % N > 0 ? !!(pat[pos - 1] & RIGHT) : false
  const isTopConnect = pos >= N ? !!(pat[pos - N] & BOTTOM) : false

  if (pat[pos]) continue
  if (N - (pos % N) < 3) continue

  let target = []
  if (isTopConnect && isLeftConnect) {
    target = N - ~~(pos / N) === 2 ? [2, 7, 6, 1] : [5, 13, 9, 10, 14, 6, 1, 2]
    if (N - (pos % N) === 3) {
      target = [9, 13, 10, 14, 1, 2, 5]
    }
  } else if (!isTopConnect && !isLeftConnect) {
    target = [3, 2, 1]
  } else if (isLeftConnect) {
    target = N - ~~(pos / N) === 2 ? [5, 7, 9, 1] : [5, 7, 13, 15, 9, 1]
    if (N - (pos % N) === 3) {
      target = [9, 11, 13, 1, 5, 7]
    }
  } else {
    target = N - ~~(pos / N) === 2 ? [2, 7, 6, 1] : [10, 11, 14, 6, 7, 2]
  }

  target.forEach((v) => {
    if (pat[pos] || cnt[v] === 0) return
    pat[pos] = v
    cnt[v]--
  })

  if (pat[pos] === 0 && N - (pos % N) > 2) {
    ;[1, 2, 4, 8].forEach((v) => {
      if (pat[pos] || cnt[v] === 0) return
      pat[pos] = v
      cnt[v]--
    })
  }
}

let ans = ''

const moveFn = (diff, str, opp) => {
  return () => {
    cell[curPos] = cell[curPos + diff]
    curPos += diff
    cell[curPos] = 0
    if (ans[ans.length - 1] === opp) {
      ans = ans.slice(0, -1)
    } else {
      ans += str
    }
  }
}

const moveU = moveFn(-N, 'U', 'D')
const moveD = moveFn(N, 'D', 'U')
const moveL = moveFn(-1, 'L', 'R')
const moveR = moveFn(1, 'R', 'L')

for (let i = curPos % N; i > 0; i--) {
  moveL()
}
for (let i = ~~(curPos / N); i > 0; i--) {
  moveU()
}

const mtu = (dest, target) => {
  for (let i = ~~(target / N) - ~~(curPos / N) - 1; i > 0; i--) {
    moveD()
  }
  for (let i = ~~(target / N) - ~~(dest / N) - 1; i > 0; i--) {
    moveD()
    moveR()
    moveU()
    moveU()
    moveL()
  }
  moveD()
  moveR()
  moveU()
}

const mtlu = (dest, target) => {
  for (let i = ~~(target / N) - ~~(curPos / N); i > 0; i--) {
    moveD()
  }
  for (let i = target - curPos - 1; i > 0; i--) {
    moveR()
  }

  for (let i = (target % N) - (dest % N) - 1; i > 0; i--) {
    moveR()
    moveU()
    moveL()
    moveL()
    moveD()
  }
  moveR()
  moveU()
  moveL()
  mtu(dest, target)
}

const mtl = (dest, target) => {
  for (let i = target - curPos - 1; i > 0; i--) {
    moveR()
  }
  for (let i = target - dest - 1; i > 0; i--) {
    moveR()
    moveD()
    moveL()
    moveL()
    moveU()
  }
  moveR()
}

const mtru = (dest, target) => {
  if (~~(target / N) === N - 1) {
    for (let i = ~~(target / N) - ~~(curPos / N) - 1; i > 0; i--) {
      moveD()
    }
    for (let i = (curPos % N) - (target % N); i > 0; i--) {
      moveL()
    }
    moveD()
    moveR()
    moveU()
    target -= N
  } else {
    for (let i = ~~(target / N) - ~~(curPos / N); i > 0; i--) {
      moveD()
    }
    for (let i = curPos - target - 1; i > 0; i--) {
      moveL()
    }
  }

  for (let i = (dest % N) - (target % N) - 1; i > 0; i--) {
    moveL()
    moveD()
    moveR()
    moveR()
    moveU()
  }
  moveL()
  moveD()
  moveR()
  moveR()
  moveU()
  moveU()
  moveL()
  mtu(dest, target)
}

const mtld = (dest, target) => {
  for (let i = N - 2 - (curPos % N); i > 0; i--) {
    moveR()
  }
  for (let i = ~~(dest / N) - ~~(target / N) - 1; i > 0; i--) {
    moveU()
  }

  if (curPos % N !== target % N) {
    moveU()
    moveR()
    moveD()
    moveL()
  }

  for (let i = ~~(dest / N) - ~~(target / N); i > 0; i--) {
    moveU()
    moveR()
    moveD()
    moveD()
    moveL()
  }
  moveL()
  moveU()

  mtl(dest, curPos + 1)
}

// タイル移動
for (let dest = 0; dest < end; dest++) {
  const findValue = pat[dest]

  if (findValue === 0) {
    continue
  }
  if (curPos !== dest) {
    for (let i = ~~(dest / N) - ~~(curPos / N); i > 0; i--) {
      moveD()
    }
    for (let i = curPos - dest; i > 0; i--) {
      moveL()
    }
    for (let i = dest - curPos; i > 0; i--) {
      moveR()
    }
  }

  let minDist = Infinity
  let target = null

  for (let i = dest; i < cellLen; i++) {
    if (cell[i] === findValue && N - ~~(dest / N) !== 2) {
      const dx = Math.abs((dest % N) - (i % N))
      const dy = Math.abs(~~(dest / N) - ~~(i / N))
      const dist = dx + dy

      if (dist < minDist) {
        target = i
        minDist = dist
      }
    }
  }
  for (let i = ~~(dest / N); i > 0; i--) {
    for (let j = 1; j < 3; j++) {
      const p = i * N - j
      if (cell[p] === findValue) {
        const dx = Math.abs((dest % N) - (p % N))
        const dy = Math.abs(~~(dest / N) - ~~(p / N))
        const dist = dx + dy

        if (dist < minDist) {
          target = p
          minDist = dist
        }
      }
    }
  }

  if (!target) {
    for (let i = ~~(dest / N); i > 0; i--) {
      for (let j = 1; j < 3; j++) {
        const p = i * N - j
        const c = cell[p]
        if (c === 1 || c === 2 || c === 4 || c === 8) {
          const dx = Math.abs((dest % N) - (p % N))
          const dy = Math.abs(~~(dest / N) - ~~(p / N))
          const dist = dx + dy

          if (dist < minDist) {
            target = p
            minDist = dist
          }
        }
      }
    }

    if (!target) continue
  }

  const dx = (target % N) - (dest % N)
  const dy = ~~(target / N) - ~~(dest / N)

  // destからみたtargetの位置によって処理分岐
  // 右上
  if (dx > 0 && dy < 0) {
    mtld(dest, target)
  }
  // 右下
  if (dx > 0 && dy > 0) {
    mtlu(dest, target)
  }
  // 右
  if (dx > 0 && dy === 0) {
    mtl(dest, target)
  }
  // 左下
  if (dx < 0 && dy > 0) {
    mtru(dest, target)
  }
  // 下
  if (dx === 0 && dy > 0) {
    mtu(dest, target)
  }
}

console.log(ans.slice(0, T))
// print(pat)
