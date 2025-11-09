const user = {
    name: "John Doe",  
    age: 33, 
    email: "abc@gmail.com",
    "mobile No": 9999999999
};
// console.log(user);


// CRUD.......
// Read Properties....
// console.log(user.name);                     // John Doe
// console.log(user["mobile No"]);                 // 9999999999 (multi-character)

// // Update Properties... (If not present-> Create)
// user.age = 100;
// user.address = "Anytown, USA";
// console.log(user);

// // Delete Properties...
// delete user.email;
// console.log(user);



// // GET...1.only keys..2.only values..3.key-value pairs....
// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));



// // get values..(destructuring)
// const name = user.name;
// const age = user.age;
// // or destructuring...
// const { name:userName, age:userAge } = user;          //OR const [name, age] = user;
// console.log(userName);
// console.log(userAge);







// loops...(for..in)
// for (let x in user) {
//     console.log(`${x} : ${user[x]}`);
// }

// // loops...(for..of)
// for(let x of Object.entries(user)) {
//     console.log(`${x[0]} : ${x[1]}`);
//     // console.log(x);
// }

// for(let x of Object.values(user)) {
//     console.log(x);
// }
// for(let x of Object.keys(user)) {
//     console.log(x);
// }





// // different objects created...using spread operator(...) || structuredClone()...
let p1 = {
    name: "Pawan",
    age: 24,
    skills: ["HTML", "CSS", "JS", "ReactJS"],
    // greet: function() {                                    // method can't be copied using structuredClone()
    //     console.log("Hello, I am " + this.name);
    // }                           
}
// let p2 = {...p1};          // CONTENT copy... only one level deep
let p2 = structuredClone(p1);   // DEEP copy... multiple levels deep
p1.name = "Bisth";
console.log(p1);
console.log(p2);