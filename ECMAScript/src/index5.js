// 二进制声明
let binary = 0B010101;
console.log(binary); // 21

// 八进制声明
let octal = 0o666;
console.log(octal); // 438

// 数字验证
let a = 11 / 4;
console.log(Number.isFinite(a)); // true
console.log(Number.isFinite('qix')); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(undefined)); // false

// NaN验证
console.log(Number.isNaN(NaN)); // true

// 判断是否为整数
let num = 123.1;
console.log(Number.isInteger(num)); // false

// 整数转换和浮点型转换
let num2 = '9.18';
console.log(Number.parseInt(num2)); // 9
console.log(Number.parseFloat(num2)); // 9.18

let num3 = Math.pow(2, 53) - 1;

// 整数取值范围操作
console.log(num3); // 9007199254740991
// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// 最小安全整数
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 安全整数判断
console.log(Number.isSafeInteger(num3)); // true
console.log(Number.isSafeInteger(num3 + 1)); // false