console.log(parseInt('1000', 2));       // 8 1000作为二进制将其转换为10进制表示
console.log(parseInt('1000', 8));       // 512 

console.log(parseInt('123', 0));        // 123
console.log(parseInt('123', undefined));// 123
console.log(parseInt('123', null));     // 123
console.log(parseInt('321', 88));       // NaN
console.log(parseInt('321', 2));        // NaN 第一位就超过了二进制能表达的范围
console.log(parseInt('10123', 2));      // 5 也就是101的十进制表示后面的数值由于超过了二进制表达范围所以忽略
