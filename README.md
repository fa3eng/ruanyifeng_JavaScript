# JavaScript教程

> 阮一峰老师的JavaScript教程
> 地址: https://wangdoc.com/javascript/index.html
> 该笔记只记录自己不清楚的内容和需要注意的内容



## 入门篇

### 1. 语句

语句以分号结尾，一个分号就表示一个语句的结束。多个语句可以写在一行内。
```js
;;;
```
分号内可以没有内容，以上视为三个JavaScript空语句。

### 2. 变量

#### 2.1 概念

* 变量区分大小写。



注意点：

```js
var num; //声明
num = 1; //赋值

var num1 = 1;//声明和赋值

num2 = 1;//直接赋值未声明变量，变量变为全局变量。

//console.log(num3);//直接使用未声明变量，报错

var num3 = 1;
var num3;//重新声明一个声明过的变量，二次声明无效。

var num3 = 2;//但是赋值操作会覆盖。使用let没有这个情况
```



### 3. 标识符

中文是合法的标识符，可以用作变量名。

> JavaScript 有一些保留字，不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。

### 4. 注释

由于历史上JavaScript可以兼容HTML代码的注释，所以`<!--`和`-->`也被视为合法的的单行注释。

* 注意点：只有`-->`在行首的时候，才会被当成单行注释，否则只会当做正常的运算。

  ```js
  let x;
  
  x = 1; <!--x = 2;
  --> x = 3;
  
  console.log(x);
  ```



### 5. 区块

JavaScript使用大括号，将多个相关的语句组合在一起，称为区块（`block`）。

对于`var`命令来说，JavaScript的区块不构成单独的作用域（`scope`）。（`let`作用域是在区块里面的）。

* `var`的作用域是函数作用域，但是不是块作用域，类似于`if{...}`，`for(){...}`这种块里面使用`var`声明的变量都不是在这个块作用域里面的。
* `let`的作用域是块。

```js
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
```



## 数据类型

### 1. 概述

#### 1.1 简介

**JavaScript中的数据类型：**

* `number`
* `string`
* `boolean`
* `undefined`
* `null`
* `object`
* `symbol`（新增）
* `BigInt`（新增）



**原始类型（primitive type）：**

* `number`
* `string`
* `boolean`

> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)将`null` 和`undefined`也算在了原始类型里面，当然了新增的两个也是原始类型。

**合成类型（complex type）：**

* `object`

  * 狭义的对象（object）

  * 数组（array）

  * 函数（function）

    >函数其实是处理数据的方法，JavaScript 把它当成一种数据类型，可以赋值给变量，这为编程带来了很大的灵活性，也为 JavaScript 的“函数式编程”奠定了基础。



#### 1.2 typeof运算符

`typeof`运算符返回一个值的数据类型。

**特殊情况：**

* 空数组和对象使用`typeof`运算符返回的值都是`object`。我们需要使用`instanceof`运算符来判断
  * 数组本质上是一种特殊的对象`arry`
* `null`的类型是`object`，这是由于历史原因造成的。1995年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑`null`，只把它当作`object`的一种特殊值。后来`null`独立出来，作为一种单独的数据类型，为了兼容以前的代码，`typeof null`返回`object`就没法改变了。



```js
typeof 123;
typeof '123';
typeof false;
let f = function(){}
typeof f;

console.log(typeof 123);    //number
console.log(typeof '123');  //string
console.log(typeof false);  //boolean
console.log(typeof f);      //function
console.log(typeof null);   //object null
console.log(typeof []);     //object 数组
console.log(typeof {});     //object 对象
```

可以使用`typeof`来检查一个没有声明的变量，而不会报错。

```js
//if(z)未经声明直接使用报错

if (typeof z === 'undefined') {
    // 正确写法
}
```

### 2. null，undefined和布尔值

#### 2.1 null和undefined

##### 2.1.1 null和undefined的历史

1995年 JavaScript 诞生时，最初像 Java 一样，只设置了`null`表示"无"。根据 C 语言的传统，`null`可以自动转为`0`。

但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面，`null`就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果`null`自动转为0，很不容易发现错误。

因此，他又设计了一个`undefined`。区别是这样的：`null`是一个表示“空”的对象，转为数值时为`0`；`undefined`是一个表示"此处无定义"的原始值，转为数值时为`NaN`。

##### 2.1.2 用法

`null`：表示空值，以及空对象`let a = null;`创建一个名为a的空对象。

`undefined`：表示为定义。

#### 2.2 布尔值

* 如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。

  ```js
  if(''){//if括号里面的值预期是一个布尔值，因此''会自动转换成布尔值
    
    console.log('true');
    
  }
  ```

转换规则是除了下面六个值被转为`false`，其他值都视为`true`。

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `""`或`''`（空字符串）

### 3. 数值

#### 3.1 概述

##### 3.1.1 整数与浮点数

JavaScript中，所有的数字都以64位浮点数形式存储。

##### 3.1.2 数值精度



























