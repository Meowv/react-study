// let a = 0;
// let b = 1;
// let c = 2;

let [a, b, c] = [1, 2, 3];

console.log(a);
console.log(b);
console.log(c);

let [foo = true] = []; // 默认值
console.log(foo);

// let [x, y = '阿星Plus'] = ['qix'];
// let [x, y = '阿星Plus'] = ['qix', undefined];
let [x, y = '阿星Plus'] = ['qix', null];

console.log(x + y);

let { foo2, bar } = { foo2: 'qix', bar: '阿星Plus' };
console.log(foo2 + bar);

// 圆括号的使用
let foo3;
({ foo3 } = { foo3: 'qix' });
console.log(foo3);

// 字符串解构

const [aa, bb, cc] = 'qix';
console.log(aa)
console.log(bb)
console.log(cc)