'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// let a = 0;
// let b = 1;
// let c = 2;

var a = 1,
    b = 2,
    c = 3;


console.log(a);
console.log(b);
console.log(c);

var _ref = [],
    _ref$ = _ref[0],
    foo = _ref$ === undefined ? true : _ref$; // 默认值

console.log(foo);

// let [x, y = '阿星Plus'] = ['qix'];
// let [x, y = '阿星Plus'] = ['qix', undefined];
var x = 'qix',
    _ref2 = null,
    y = _ref2 === undefined ? '阿星Plus' : _ref2;


console.log(x + y);

var _foo2$bar = { foo2: 'qix', bar: '阿星Plus' },
    foo2 = _foo2$bar.foo2,
    bar = _foo2$bar.bar;

console.log(foo2 + bar);

// 圆括号的使用
var foo3 = void 0;
var _foo = { foo3: 'qix' };
foo3 = _foo.foo3;

console.log(foo3);

// 字符串解构

var _qix = "qix",
    _qix2 = _slicedToArray(_qix, 3),
    aa = _qix2[0],
    bb = _qix2[1],
    cc = _qix2[2];

console.log(aa);
console.log(bb);
console.log(cc);
