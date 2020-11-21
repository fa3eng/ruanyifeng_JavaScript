let obj = { p: 1, };

console.log(obj + '1');     // [object Object]1

console.log(obj.valueOf());                // { p: 1 }
console.log(typeof (obj.valueOf()));       // object

console.log(obj.toString());                // [object Object]
console.log(typeof (obj.toString()));       // string
