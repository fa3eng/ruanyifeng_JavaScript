
// 全局变量
var a = 1;

// 最顶层函数
function f1() {
    // 函数作用域
    var a = 2;      //函数作用域里面的变量覆盖同名的全局变量
    console.log(a);
}

console.log(a);     // 1
console.log(f1());  // 2

if (true) {
    var b = 2;
}

console.log(b);     // 2 if里面是块级作用域，并不是函数作用域，因此这里变量b是全局变量