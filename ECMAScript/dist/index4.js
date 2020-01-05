'use strict';

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
