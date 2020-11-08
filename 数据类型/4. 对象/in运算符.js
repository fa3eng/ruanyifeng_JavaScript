let obj = {
    p: 1,
    2: 12,
};

console.log('p' in obj);        // true
console.log(2 in obj);          // true
console.log('toString' in obj); // true