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

let json = {
    a: 'qix',
    b: 'aaa'
}
function func({ a, b = 'qix' }) {
    console.log(a, b)
}
func(json)

console.log('b' in json); // true

let arr6 = ['qix', 'meowv', 'aaa'];
function func2(a, b, c) {
    console.log(a, b, c)
}
func2(...arr6)

console.log(0 in arr6); // true

let arr7 = [, , , , ,];
console.log(arr7.length); // 5
console.log(0 in arr7); // false

// 数组的遍历方法
let arr8 = ['www', 'meowv', 'com'];

// forEach
arr8.forEach((val, index) => console.log(index, val));

// filter
arr8.filter(x => console.log(x))

// some
arr8.some(x => console.log(x))

// map 替换
console.log(arr8.map(x => 'web'))

// join()
console.log(arr8.join('.'))

// toString*()
console.log(arr8.toString());