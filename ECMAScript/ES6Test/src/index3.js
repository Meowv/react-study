function qix(...args) {
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(args[3]);
}

qix(1, 2, 3);

// let arr1 = ['www', 'meowv', 'com'];
// let arr2 = arr1;
// console.log(arr2);
// arr2.push('qix');
// console.log(arr1);

let arr1 = ['www', 'meowv', 'com'];
// let arr2 = arr1;
let arr2 = [...arr1];
console.log(arr2);
arr2.push('qix');
console.log(arr2);
console.log(arr1); // arr1并没有改变

// rest运算符
function foo(first, ...args) {
    console.log(args.length);
    for (let val of args) {
        console.log(val);
    }
}

foo(0, 1, 2, 3, 4, 5, 6, 7);