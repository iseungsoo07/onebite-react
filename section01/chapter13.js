// 1. 콜백함수
function main(value) {
    value();
}

main(() => {
    console.log("I am sub");
});

// 2. 콜백함수의 활용
// 중복코드를 발생시키지 않으면서 코드 개선
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

// function repeatDouble(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//     }
// }

// function repeatTriple(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 3);
//     }
// }

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});
