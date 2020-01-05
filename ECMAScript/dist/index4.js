'use strict';

// npm install -g live-server
// live-server

var qix = '阿星Plus';
var blog = '巴拉巴拉巴拉，我是' + qix;
document.write(blog);

var blog2 = '\u5DF4\u62C9\u5DF4\u62C9\u5DF4\u62C9\uFF0C\u6211\u662F' + qix;
document.write(blog2);

var blog3 = '<b>\u5DF4\u62C9\u5DF4\u62C9\u5DF4\u62C9</b>\uFF0C\u6211\u662F' + qix;
document.write(blog3);

var a = 1;
var b = 2;
var result = '' + (a + b);
document.write(result);

// 字符串查找

// 查找是否存在
document.write(blog.indexOf(qix));
document.write(blog.includes(qix));

// 判断开头是否存在
document.write(blog.startsWith(qix));

// 判断结尾是否存在
document.write(blog.endsWith(qix));

// 复制字符串
document.write('qix|'.repeat(3));
