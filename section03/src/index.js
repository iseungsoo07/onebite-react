// cjs를 사용하는 경우
// const { add, sub } = require("./math.js");

// es 모듈을 사용하는 경우 (확장자 명시 필수)
// randomcolor
import randomColor from "randomcolor";
import multiply, { add, sub } from "./math.js";

// console.log(add(1, 2), sub(1, 2));
// console.log(multiply(1, 2));

let color = randomColor();

console.log(color);
