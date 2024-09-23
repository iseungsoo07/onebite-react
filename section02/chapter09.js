// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소만 필터링하여 새로운 배열로 반환
let arr1 = [
    { name: "이정환", hobby: "테니스" },
    { name: "김효빈", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행한 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});

console.log(mapResult1);

let names = arr1.map((x) => x.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 사전순 정렬이므로 숫자를 인수로 받았을 때도 문자열로 처리
// 숫자 비교를 위해서는 콜백함수 필요
let arr3 = ["b", "a", "c"];
let arr4 = [3, 10, 5];
arr3.sort();
arr4.sort((a, b) => a - b);
console.log(arr3);
console.log(arr4);

// 4. toSorted
// sort는 원본 배열을 정렬, toSorted는 새로운 배열을 반환
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
// 파라미터를 입력해 구분자로 사용
let arr6 = ["hi", "I", "am", "winterlood"];

console.log(arr6.join(" "));
