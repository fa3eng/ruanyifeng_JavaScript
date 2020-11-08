

let str = 'abc';

console.log(str[1]);        // b
console.log(str[3]);        // undefined
console.log(str['2']);      // c
console.log(str['x']);      // undefined

console.log(str['+2']);     // undefined
console.log(Number('+2'));  // 2

console.log(str[true]);     // undefined
console.log(Number(true));  // 1

console.log(str[null]);     // undefined
console.log(Number(null));  // 0

