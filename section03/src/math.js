// math 모듈

// cjs를 사용하는 경우

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// module.exports = {
//     add,
//     sub,
// };

// es 모듈을 사용하는 경우

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}
