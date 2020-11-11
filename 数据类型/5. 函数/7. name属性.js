function f1() { }
console.log(f1.name);       // f1

let f2 = function () { };
console.log(f2.name);       // f2

// 当函数表达式中 变量的值并不是一个匿名函数时

let f3 = function f4() { };
console.log(f3.name);       //f4