// function fun(){
//     console.log("This is a function");
// }
// fun();


// // 1. Hoisted..
// function sum(a, b){
//     console.log("Calculated...");
//     return a + b;
// }
// let ans = sum(10, 20);
// console.log( ans );



// // 2. function: expression  (not Hoisted)...
// const add = function(x, y){
//     return x + y;
// };
// console.log( add(10, 20) );        // 30


// // 3. Arrow Functions**...(ES6+)
// const add = (a, b) => {
//     return a + b;
// };
// // OR (single line return)
// const add2 = (a, b) =>  a + b;
// console.log( add(10,30));



// // 4. IIFE: Immediately Invoked Function Expression...()()
// (function(){
//     console.log("IIFE executed...");
// })();
// // OR
// (() => {
//     console.log("IIFE Arrow executed...");
// })();
// // OR
// (function(a, b){
//     console.log("IIFE executed with params:", a, b);
// })(10, 20);




// default parameters...
// function multiply(a, b=1){
//     return a * b;
// }
// console.log( multiply(5) );        // 5
// console.log( multiply(5, 2) );     // 10


// // Rest Parameters (...) ....
// function add(...numbers){
//     let total = 0;
//     for(let x of numbers)
//         total += x;
//     return total;
// }
// console.log(add(1, 2, 3, 4, 5));      // 15
// console.log( add(10, 20));            // 30



// // Callback Functions...
function first(){   
    console.log("I am First function");
}
function second(){   
    console.log("I am Second function");
}
function greet(callback){
    console.log("greet Function");  
    callback();
}
greet(first);
greet(second);




        