function f1() {
    
    let a = 11;

    function f2() {
        console.log(a);
    }

    return f2;
}

let result = f1();
result();       // 11