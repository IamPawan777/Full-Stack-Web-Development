let arr = [34, 23, 24, 25, 45];
let arr2 = ["Pawan", "Bisth", 34, 56.7, true, val="Lokesh"];

// console.log(arr);
// console.log(arr2);


// // array length...
// console.log(arr.length);      // 5


// // check specific value (mutable)...
// arr[0] = "Lokesh";          // update value
// console.log(arr);


// // array methods: (push, pop, shift, unshift, splice, slice, indexOf, includes, etc.)
// // push() method...
// arr.push("New Value");      // add value at last
// console.log(arr);

// // pop() method...
// arr.pop();               // remove value from last
// console.log(arr);

// unshift() method...
// arr2.unshift("First Value");    // add value at start
// console.log(arr2);

// // shift() method...
// arr2.shift();               // remove value from start
// arr2.shift();  
// console.log(arr2);


// // slice() method...
// let arr4 = arr2.slice(0,3);     // create new array from existing array
// console.log(arr4);

// // splice() method...
// arr2.splice(1,2,  "New1");              // remove and add value in array
// console.log(arr2);


// // concatinate operator...
// let arr5 = arr.concat(arr2);
// console.log(arr5);


// // indexOf(), lastIndexOf() method...
// console.log(arr2.indexOf("Bisth"));       // 1
// console.log(arr2.lastIndexOf("Bisth"));      // 1


// includes() method...
// console.log(arr2.includes("Apple"));      // fasle
// console.log(arr2.includes("Pawan"));       // true




// // spread operator...
// let arr6 = [...arr2, ...arr, 100];  
// console.log(arr6);


// // sort() method...
// let arr8 = [34, 23, 24, 25, 45, 3, 5, 67, 1];
// // arr8.sort((a, b) => a-b);                       // sort in ascending order
// arr8.sort((a, b) => b-a);           // sort in descending order
// console.log(arr8);     


// flatten() method...
// let arr9 = [1, 2, [3, 4], [5, 6, [7, 8]]];
// let flatArr = arr9.flat(Infinity);        // flatten the array
// console.log(flatArr);




// // join() method: array to string...
// let arr7 = ["Lokesh", "Dvesh", "Harry"];
// console.log(arr7.toString());
// console.log(arr7.join(" - "));









// // iterate array using for loop...
// let arr3 = ["Pawan", "Bisth", "Lokesh", "Dvesh", "Harry"];
// for (let i = 0; i < arr3.length; i++) {
//     console.log(arr3[i]);
// }


// iterate array using for..of loop...
for (let x of arr2) {
    console.log(x);
}


