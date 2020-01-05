var a = new String;
var b = new Number;
var c = new Boolean;
var d = new Array;
var e = new Object;
var f = Symbol();
var g = Symbol('qix');

console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
console.log(typeof (d));
console.log(typeof (e));
console.log(typeof (f));
console.log(typeof (g));
console.log(g);
console.log(g.toString());

var qix = Symbol();
var obj1 = {
    [qix]: 'qix'
}
console.log(obj1[qix])
obj1[qix] = 'web';
console.log(obj1[qix]);

var obj = { name: 'qix', skill: 'web', age: 18 };
for (let item in obj) {
    console.log(obj[item]);
}

var obj2 = { name: 'qix', skill: 'web' };
let age = Symbol();
obj2[age] = 18;
for (let item in obj2) {
    console.log(obj2[item]);
}
console.log(obj2)