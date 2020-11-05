typeof 123;
typeof '123';
typeof false;
let f = function(){}
typeof f;

console.log(typeof 123);    //number
console.log(typeof '123');  //string
console.log(typeof false);  //boolean
console.log(typeof f);      //function
console.log(typeof null);   //object null
console.log(typeof []);     //object 数组
console.log(typeof {});     //object 对象


//if(z)未经声明直接使用报错

if (typeof z === 'undefined') {
    // 正确写法
}

