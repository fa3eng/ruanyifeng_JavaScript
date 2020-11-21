let obj = {

    toString: function () {
        return 1;
    },

    valueOf: function () {
        return 2;
    }

}

console.log(obj + '1');         // 21
console.log(typeof (obj + '1'));// string