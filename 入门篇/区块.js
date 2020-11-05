var num1 = 1;

console.log(num1);//1

function demo() {
    
    var num2 = 2;
    let num3 = 3;

    console.log(num2);//2
    console.log(num3);//3
}


//console.log(num2);//报错，没有声明直接使用
//console.log(num3);//报错，没有声明直接使用

if (true) {
    
    var num4 = 4;

}

console.log(num4);//4

for (; 1 ;){
    var num5 = 5;
    break;
}

console.log(num5);//5

while (true) {
    var num6 = 6;
    break;
}

console.log(num6);//6