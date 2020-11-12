let arr = [1, 2];
console.log(arr.length);        // 2

arr[2] = 1;
console.log(arr.length);        // 3

arr[20] = 2;
console.log(arr.length);        // 21

arr.length = 2;
console.log(arr);               // [ 1, 2 ]