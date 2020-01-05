// npm install -g live-server
// live-server

let qix = '阿星Plus';
let blog = '巴拉巴拉巴拉，我是' + qix;
document.write(blog);

let blog2 = `巴拉巴拉巴拉，我是${qix}`;
document.write(blog2);

let blog3 = `<b>巴拉巴拉巴拉</b>，我是${qix}`;
document.write(blog3);

let a = 1;
let b = 2;
let result = `${a + b}`;
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