'use strict';

function qix() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

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

var arr1 = ['www', 'meowv', 'com'];
// let arr2 = arr1;
var arr2 = [].concat(arr1);
console.log(arr2);
arr2.push('qix');
console.log(arr2);
console.log(arr1); // arr1并没有改变

// rest运算符

function foo(first) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    console.log(args.length);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

foo(0, 1, 2, 3, 4, 5, 6, 7);
