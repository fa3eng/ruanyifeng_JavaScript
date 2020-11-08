
let name = 'age';

let obj = {

    name: 'meakle',
    age: 12,

};

console.log(obj[name]);     //12   
/**
  在方括号内，name作为变量放入方括号运算符中，name变量的值是age，因此所使用的属性名应该是age，因此log出来的值是12
 */
console.log(obj['name']);   //meakle


let obj2 = {

    helloworld: 'hello',
    12: 'age',

};



console.log(obj2['hello' + 'world']);   // hello 
console.log(obj2[1 + 11]);              // age