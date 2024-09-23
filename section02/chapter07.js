// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가
// push 이후의 배열의 길이를 리턴
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6);

// console.log(arr1);
// console.log(newLength);

// 2. pop
// 배열의 맨 뒤의 요소를 제거하고 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(poppedItem);
// console.log(arr2);

// -- shift와 unshift는 push와 pop보다 연산속도가 느리다.
// 인덱스를 앞뒤로 옮기는 작업이 필요하기 때문

// 3. shift
// 배열의 맨 앞의 요소를 제거하고 반환
let arr3 = [1, 2, 3];
const firstItem = arr3.shift();

// console.log(firstItem);
// console.log(arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

// console.log(arr4);
// console.log(newLength2);

// 5. slice(자르기 시작할 인덱스, 원하는 범위 + 1)
// 2번째 인수를 생략하면 배열의 끝까지 잘라냄
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 2번 인덱스부터 4번 인덱스까지
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-1);

// console.log(sliced);
// console.log(sliced2);
// console.log(sliced3);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
