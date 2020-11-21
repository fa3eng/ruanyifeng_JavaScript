let obj = new Date();

obj.valueOf = function () { return '1' };
obj.toString = function () { return '2' };

console.log(obj > '11');        // false

console.log(+obj);