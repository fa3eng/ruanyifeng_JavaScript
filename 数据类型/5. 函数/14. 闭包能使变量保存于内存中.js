function fun1(start) {
    
    return function () {
        return start++;
    };

}

let fun = fun1(5);

console.log(fun());     // 5
console.log(fun());     // 6
console.log(fun());     // 7
