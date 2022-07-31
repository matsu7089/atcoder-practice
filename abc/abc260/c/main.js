const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, X, Y] = input[0].split(' ').map((v) => parseInt(v))

const B2 = Y
const R2 = B2 * X

const B3 = R2 + B2 * Y
const R3 = R2 + B3 * X

const B4 = R3 + B3 * Y
const R4 = R3 + B4 * X

const B5 = R4 + B4 * Y
const R5 = R4 + B5 * X

const B6 = R5 + B5 * Y
const R6 = R5 + B6 * X

const B7 = R6 + B6 * Y
const R7 = R6 + B7 * X

const B8 = R7 + B7 * Y
const R8 = R7 + B8 * X

const B9 = R8 + B8 * Y
const R9 = R8 + B9 * X

const B10 = R9 + B9 * Y
const R10 = R9 + B10 * X

const R = [0, R2, R3, R4, R5, R6, R7, R8, R9, R10]
console.log(R[N - 1])
