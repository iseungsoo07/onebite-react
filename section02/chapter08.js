// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행

let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
    // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => doubledArr.push(item * 2));
// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인

let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스를 찾아서 반환

let arr3 = [1, 2, 3];
let idx = arr3.indexOf(2);
// console.log(idx);

let objArr = [{ name: "이정환" }, { name: "홍길동" }];

// 이런 객체타입을 찾을 수 없기 때문에 findIndex 메서드가 존재
console.log(objArr.indexOf({ name: "이정환" }));
console.log(objArr.findIndex((item) => item.name === "이정환"));

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스를 찾아서 반환
let arr4 = [1, 2, 3];
let index = arr4.findIndex((item) => item % 2 !== 0);

console.log(index);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아서 그대로 반환
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];
const found = arr5.find((item) => item.name === "이정환");
console.log(found);
