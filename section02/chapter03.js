// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

// 귀찮다
let a = arr[0];
let b = arr[1];
let c = arr[2];

// one에 arr[0], two에 arr[1], three에 arr[2] 할당
// four는 없기 때문에 undefined로 출력 four = 4로 기본값 설정도 가능
let [one, two, three, four] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = { name: "song", age: 27, hobby: "테니스" };

// age를 myAge라는 변수명으로 받을 수 있다.
let { name, age: myAge, hobby } = person;
console.log(name, myAge, hobby);

// 3. 객체 구조 분해 할당을 이용한 함수 매개변수 받기
const func = ({ name, age, hobby, extra = "hello" }) => {
    console.log(name, age, hobby, extra);
};

func(person);
