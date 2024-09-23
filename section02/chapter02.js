// 단락 평가
// false && true 이면 true를 확인하지 않아도 false를 리턴
// true || false 이면 false를 확인하지 않아도 true를 리턴하는 것을 의미

// 단락 평가 활용 사례
// 일반적으로 undefined 값에 .을 사용해서 접근하면 에러가 발생하기 때문에
// 조건문을 사용해서 person 값의 존재 여부를 확인해야 한다.
function printName(person) {
    if (!person) {
        console.log("person 값이 없음");
        return;
    }

    console.log(person.name);
}

printName();

// person이 존재하지 않는다면 person.name에 접근하지 않게 될 것이고
// name이 falsy한 값이 되기 때문에 or 연산에 의해 뒤의 문자열이 출력된다.
function printName2(person) {
    const name = person && person.name;
    console.log(name || "person 값이 없음");
}

printName2();
