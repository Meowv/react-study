let a = 1;
console.log(a);

/**
 * npm init -y
 * npm install -g babel-preset-es2015 babel-cli
 * npm install --save babel-preset-es2015 babel-cli
 * babel src / index.js - o dist / index.js
 * npm run build
 */

/**
 * var：它是variable的简写，可以理解成变量的意思。
 * let：它在英文中是“让”的意思，也可以理解为一种声明的意思。
 * var：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量。
 */

var aa = 'qix';
console.log(aa);

window.onload = function () {
    console.log(aa);
};

{
    // var aa = '阿星Plus';
    let aa = '阿星Plus';
}
console.log(aa);

for (var i = 0; i < 10; i++) {
    console.log('循环体中:' + i);
}
console.log('循环体外:' + i);

for (let i2 = 0; i2 < 10; i2++) {
    console.log('循环体中:' + i2);
}

// console.log('循环体外:' + i2); Uncaught ReferenceError: i2 is not defined

const x = 'qix';
// var x = '阿星Plus'; const声明的变量是不可以改变的
console.log(x);