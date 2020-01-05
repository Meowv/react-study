let setArr = new Set(['qix', 'meowv', 'com', 'qix']);

console.log(setArr);
// Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。

// Set值的增删查

setArr.add('aaa');
console.log(setArr);

setArr.delete('aaa');
console.log(setArr);

console.log(setArr.has('qix'));

for (let item of setArr) {
    console.log(item)
}

console.log(setArr.size)

setArr.forEach((value) => console.log(value));

setArr.clear()
console.log(setArr);

let weakObj = new WeakSet();
let obj = { a: 'qix', b: 'aaa' };

let obj1 = obj;

weakObj.add(obj);
weakObj.add(obj1);
console.log(weakObj)

// WeakSet里边的值也是不允许重复的
