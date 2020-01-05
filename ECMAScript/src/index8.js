// 对象赋值
let name = 'qix';
let skill = '.net core';
var obj = { name, skill };
console.log(obj);

// 对象key值构建
let key = 'skill';
var obj = {
    [key]: '.net core'
}
console.log(obj.skill);

// 自定义对象方法
var obj = {
    add: function (a, b) {
        return a + b;
    }
}
console.log(obj.add(1, 2)); // 3

// is()
var obj1 = { name: 'qix' };
var obj2 = { name: 'qix' };
console.log(obj1.name === obj2.name);
console.log(Object.is(obj1.name, obj2.name));

// === 和 is方法的区别
console.log(+0 === -0) // true
console.log(NaN === NaN) // false
console.log(Object.is(+0, -0)) // false
console.log(Object.is(NaN, NaN)) // true
// === 为同值相等，is()为严格相等

// assign() 合并对象
var a = { a: 'www' };
var b = { b: 'meowv' };
var c = { c: 'com' };

let d = Object.assign(a, b, c);
console.log(d)