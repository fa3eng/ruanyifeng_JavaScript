let fun = function (a, b , c) {
    
    console.log(arguments.length);

    for (let i = 0; i < arguments[i]; i++){
        console.log(arguments[i]);
    }

}

fun(1, 2);      // 2 1 2  第一个是数组的长度 后两个则是参数