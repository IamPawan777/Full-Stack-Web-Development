// Variable..
// old way......
na = "Hello";
val = 21;
console.log(na, val);


// new way......
let name = "Harry pot";
let num = 21;
num = 333
console.log(name, num);


// fix value....
const ac = "pawan";
// ac = 9;                  // override
console.log(ac);


// old way.....
var value = "kamla";
var value = "lol";          // ✅
console.log(value);



// Primitive DataType...
// 1. number
let a = 20;
let b = 12323232.3412123131;
console.log(a, b);

// 2. String
let x = "Hi how are you!";
let y = 'Hello guys!';
console.log(x, y);

// 3. booelan
let login = true;
console.log(login);

// 4. undefined (blank)
let user;
// let user = undefined;
console.log(user);

// 5. bigint
let n = 234238989123n;
console.log(n);

// 6. null (currently Empty)
let something = null;
console.log(something);



// Non premitive....
// 1. Array....
let arr = [22, 56.345, "Lokesh", false];
console.log(arr);

arr[0] = "Laxmi";
console.log(arr);

    // 2. object.. (JSON formate)
    let ob = {
        name : "pawan",
        age : 23,
        graduted : true
    };
    console.log(ob);

// 3. Function
function add(){
    console.log("This is Function");
}
add();


// add funtion in variable
let f = function add(){
    console.log("This is Function");
}
console.log(f);
f();                    // call via variable


// check type of variable...
console.log("Type of f:", typeof f);
