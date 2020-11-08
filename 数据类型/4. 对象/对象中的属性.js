let obj = {

    p: function () {
        return 2;
    }

}

// 链式引用

let obj2 = {

    obj3: {
        p: function () {
            return 3;
        }
    }

}

// 动态创建属性
let obj3 = {};

obj3.foo = 123;
obj3['123'] = 1;        // 如果说属性名不符合变量命名的标准的话，我们就需要使用这种方式命名属性