
console.log(0 === -0);      //true
console.log(-0 === +0);     //true
console.log(0 === +0);      //true

console.log((-0).toString());   //0
console.log((+0).toString());   //0

let num1 = (1 / +0);
let num2 = (1 / -0);

console.log(num1 + ' ' + num2);//Infinity -Infinity
console.log(num1 === num2);//false
