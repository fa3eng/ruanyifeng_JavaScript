
// function func1() { console.log('1') } ();
// SyntaxError: Unexpected token ')'


(function() { console.log('1') }());      // 1


let f = function () {
    console.log('2');
}();        // 2


(function () {
    let temp = newData;
    func1(temp);
    func2(temp);
}());

