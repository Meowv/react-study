function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

// 默认值
function add1(a, b = 1) {
    return a + b;
}
console.log(add1(1));

// 主动抛出错误
function add2(a, b = 1) {
    if (a == 0) {
        throw new Error('This is error')
    }
    return a + b;
}
// console.log(add2(0));
console.log(add2.length);

// 函数中的严谨模式，不能有默认值
function add3(a, b) {
    'use strict'
    if (a == 0) {
        throw new Error('This is error')
    }
    return a + b;
}
console.log(add3(1, 2));
console.log(add3.length);

// 箭头函数
var add4 = (a, b = 1) => a + b;
console.log(add4(1))

// {}的使用
var add5 = (a, b = 1) => {
    console.log('{}')
    return a + b;
}
console.log(add5(1))