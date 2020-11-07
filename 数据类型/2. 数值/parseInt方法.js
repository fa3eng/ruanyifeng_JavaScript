// 基本用法
console.log(typeof parseInt('123'));// number
console.log(parseInt('123'));       // 123


// 前面有空格
console.log(parseInt('    123'));   // 123

// 当出现无法转换的字符时
console.log(parseInt('123aaa'));    // 123
console.log(parseInt('asf123'));    // NaN
console.log(parseInt('12e3'));      // 12
console.log(parseInt('0123'));      // 123 当成十进制处理
console.log(parseInt('0x10'));      // 16 转换成10进制
console.log(parseInt('0b10'));      // 0  无法识别二进制
console.log(parseInt('0o888'));     // 0  无法识别八进制

