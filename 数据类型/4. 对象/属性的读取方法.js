
let obj = {

    p: '123',
    '12p': '123',

}

console.log(obj.p);     //123
// console.log(obj.12p); 报错
console.log(obj['12p']);//123