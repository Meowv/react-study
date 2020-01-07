var obj = {
    add: function (val) {
        return val + 10;
    },
    name: 'i am qix'
};
// console.log(obj.add(100));
// console.log(obj.name);

var pro = new Proxy({
    add: function (val) {
        return val + 10;
    },
    name: 'i am qix'
}, {
    get: function (target, key, property) {
        console.log('come in get');
        return target[key];
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key} = ${value}`);
        return target[key] = value;
    }
});
console.log(pro.name);
pro.name = '阿星Pluc';
console.log(pro.name);

// apply

let target = function () {
    return 'i am qix';
}
let handler = {
    apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}
let pro2 = new Proxy(target, handler);
console.log(pro2());