const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]

const sLen = S.length
let iLeft = 0
let iRight = sLen

// 先頭から'a'がどこまで続くか調べる
for (let i = 0; i < sLen; i++) {
  if (S.charAt(i) === 'a') {
    iLeft = i + 1
  } else {
    break
  }
}

// 末尾から'a'がどこまで続くか調べる
for (let i = sLen - 1; i >= 0; i--) {
  if (S.charAt(i) === 'a') {
    iRight = i
  } else {
    break
  }
}

/** 前後の連続する'a'を取り除いた文字列 */
const str = S.slice(iLeft, iRight)

const half = Math.floor(str.length / 2)
const left = str.slice(0, half)
const right = str.slice(-half).split('').reverse().join('')

/** strが回文かどうか */
const isKaibun = half === 0 || left === right

/** 回文 && 末尾から連続する'a'の個数 >= 先頭から連続する'a'の個数 */
console.log(isKaibun && sLen - iRight >= iLeft ? 'Yes' : 'No')
