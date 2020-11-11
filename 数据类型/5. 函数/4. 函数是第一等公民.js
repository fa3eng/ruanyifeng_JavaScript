function add(x, y) {
    return x + y;
}

let op = add;

function a(op) {
    return op;
}


console.log(a(op(1, 1)));
console.log(a(add)(1, 1));      //