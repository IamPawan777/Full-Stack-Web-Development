// Operator
// 1. Arithmetic operator:
// console.log(1+5);           // 6
// console.log(5%2);           // 1
// console.log(5**2);          // 25




// // 2. Assignment Opeartor:
// let a = 20;
// let b = 30;
// a -= b;
// console.log(a);         // -10



// // 3. Comparition Operator
// let a = 20;
// let b = 40;
// console.log(a>b);           // false
// console.log(a==b);          // false
// console.log(a===b);      // check type -> comparition
// console.log(null == undefined)          // true
// console.log(null>=0);                   // true
// console.log(undefined>=0);              // false
// console.log('A'<'a');                   // true bczchange number 65<97
// console.log(10=="10")                   // true bcz change into number



// // type convertion......
// let a = "20";
// let b = Number(a);
// let c = String(b);
// console.log(typeof(a), typeof(b), typeof(c));       //string number string

// console.log(Number(true));                // 1

// console.log(Number(null));               // 0
// console.log(Number(undefined));         // NaN

// console.log(Boolean("Hi"));             // true





// // 4. loop.....
// // for.........
// let arr = [11, 22, 33, 44];
// for(var i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(i);             //  'var' problem in JS


// // while......
// let i = 0;
// while(i<10) {
//     console.log(i++);
// }





// 5. conditional.....
let age = 22;
if(age>20)
    console.log("Greater than age");
else
    console.log("Smaller");






// 6. logical operator
// console.log(true && false);
// console.log(false || true);
// console.log(4!=9);