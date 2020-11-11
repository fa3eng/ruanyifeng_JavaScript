function Person(name) {
    
    let age;

    function setAge(n) {
        age = n
    }

    function getAge() {
        return age;
    }

    return {

        name: name,
        age: age,
        setAge: setAge,
        getAge: getAge,

    }

}

let meakle = Person('meakle');
meakle.setAge(20);
console.log(meakle.getAge());       // 20