// 1. Spread 연산자
// Spread : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// 이렇게 직접 할당을 하게 되면 arr1의 내용이 변하면 곤란해짐
let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];

// spread 연산자 사용
let arr3 = [4, ...arr1, 5, 6];

console.log(arr3);

let obj1 = { a: 1, b: 2 };
let obj2 = { a: obj1.a, b: obj1.b, c: 3, d: 4 };

// spread 연산자 사용
let obj3 = { ...obj1, c: 3, d: 4 };

console.log(obj3);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// == 나머지 매개변수
// 매개변수가 배열 형태로 받아진다
// Rest 매개변수 뒤에는 추가로 변수를 입력 x 무조건 rest 매개변수가 가장 마지막
function funcB(one, ...rest) {
    console.log(one, rest);
}

funcB(...arr1);
