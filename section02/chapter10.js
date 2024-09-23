// 1. Date 객체를 생성
let date1 = new Date();
console.log(date1);

let date2 = new Date(1997, 0, 7, 23, 59, 32);
console.log(date2);

// 2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
// "1970.01.01 00시 00분 00초" => UTC
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소를 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minutes, seconds);

// 4. 시간 수정
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(23);
date1.setSeconds(23);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력
console.log(date1.toDateString());
console.log(date1.toLocaleString());
