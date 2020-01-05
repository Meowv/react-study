// json数组格式
let json = {
    '0': 'qix',
    '1': '阿星Plus',
    '2': 'meowv',
    length: 3
}

let arr = Array.from(json);
console.log(arr);

// Array.of()
let arr2 = Array.of(3, 4, 5, 6);
console.log(arr2);
let arr3 = Array.of('qix', '阿星Plus', 'meowv');
console.log(arr3);

// find()
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr4.find(function (value, index, arr4) {
    return value > 5;
}))

// fill()
arr4.fill('qix', 2, 5);
console.log(arr4)

// for...or()
let arr5 = ['qix', 'meowv', 'aaa'];
for (let item of arr5) {
    console.log(item);
}
for (let index of arr.keys()) {
    console.log(index);
}
for (let [index, item] of arr.entries()) {
    console.log(index + ':' + item);
}

let list = arr5.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);