let obj = {

    a: 1,
    b: 2,
    c: 3,

    d: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
};

// for (key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }

for (key in obj.d) {
    console.log(key); // key1 key2 key3 链式调用不是继承
}

for (key in obj) {
    
    if (obj.hasOwnProperty(key)) {
        console.log(key);    
    }

}