// function 声明
function func(parameter) {
    
    return parameter;

}

// 函数表达式
let func2 = function (parameter) {
    
    return parameter;

}

let func3 = new Function (

    'x',
    'y',
    'retrun x + y',

);

//等同于

function func3_(x, y) {
    return x + y;
}

let func4 = Funtion(
    'x',
    'y',
    'return x + y',
);