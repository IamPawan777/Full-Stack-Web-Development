const obj = {
    name : "Pawan",
    age : 32,
    greet : () =>{
        console.log("This is greet function ")
    }
};
// console.log(obj);
// console.log(obj.hasOwnProperty('name'));
// console.log(obj.name);
// console.log(obj.toString());


const obj2 = {
    address : `delhi`
};
obj2.__proto__ = obj;               //or... Object.setPrototypeOf(obj2, obj);
console.log(obj2.greet());



