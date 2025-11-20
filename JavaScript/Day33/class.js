// class.........
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(`Hi, ${this.name}, your age is ${this.age}.`);
        
    }
}

const p1 = new Person('pawan Bisht', 22);
p1.sayHi();
// console.log(p1);





// inheritance........
class Child extends Person{
    constructor(name, age, account){
        super(name, age);
        this.account = account;
    }
    getValue(){
        console.log(`name: ${this.name}, age: ${this.age}, account: ${this.account}`);
    }
}
const c1 = new Child('komal', 21, 121212);
c1.getValue();
c1.sayHi();