// Array methods: forEach, sort, filter, map, reduce.......
// forEach method.....
const arr = [1, 2, 3, 4, 5];
// arr.forEach((x)=>{
//     console.log(x);
// })
 
// // for-each with index.....
// arr.forEach((x, i)=>{
//     console.log(x, i);
// })




// // filter method....."return array"..
// //Example 1...
// const arr2 = [10, 50, 20, 40, 30];
// let ansArr = arr2.filter((x)=> x > 18);
// console.log(ansArr);                    // [20, 25, 30]

// //Example 2...
// const arr22 = ["apple", "banana", "grape", "kiwi", "mango"];
// let ansArr2 = arr22.filter((x) => {
//     if(x.includes("ap"))  
//     return true;
// });
// console.log(ansArr2);                   // [ 'apple', 'grape' ]




// // // map method....."can return"....
// const arr3 = [1, 2, 3, 4, 5];
// let mappedArr = arr3.map((x)=> x * 2);
// console.log(mappedArr);                 // [2, 4, 6, 8, 10]




// // sorting array.......
// const arr3 = [33,6,12,45,23,9];
// // const sorted = arr3.sort((a,b) =>{
// //     return a-b;
// // });
// const sorted = arr3.sort((a,b) => a-b);
// console.log(sorted);




// products array.......................
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
    { id: 4, name: 'Monitor', price: 200 },
    { id: 5, name: 'Keyboard', price: 50 },
    { id: 6, name: 'Mouse', price: 25 },
    { id: 7, name: 'Headphones', price: 150 },
    { id: 8, name: 'Speaker', price: 100 }
];


// // filter to get products with price > 200........
// const expensivePro = products.filter((p) => p.price > 200);
// console.log(expensivePro);                   // [ { id: 1, name: 'Laptop', price: 1000 }, { id: 2, name: 'Phone', price: 500 }, ... ]


// // map to extract names and prices...........
// const ans = products.map((p) => ({ name: p.name,  price: p.price }) );
// console.log(ans);                         // [ { name: 'Laptop', price: 1000 }, { name: 'Phone', price: 500 }, ... ]



// set......(no duplicate values)...........
// const arr4 = [1, 2, 3, 4, 5, 3, 2, 1];
// const set = new Set(arr4);          // create set from array..unique values only
// console.log(set);                      // Set(5) { 1, 2, 3, 4, 5 }

// set.add(6);                          // add value to set
// console.log(set.has(3));              // check if value exists in set
// console.log(set.size);              // size of set



// // map........(key-value pairs)...........
const arr5 = new Map([['name', 'Alice'], ['age', 25], ['city', 'Los Angeles']]);
console.log(arr5);               // Map(3) { 'name' => 'Alice', 'age' => 25, 'city' => 'Los Angeles' }


// or map creation.......
const map = new Map();
map.set('name', 'John');              // set key-value pair
map.set('age', 30);
map.set('city', 'New York');    
console.log(map.get('name'));            // get value by key
console.log(map.size);                     // size of map
console.log(map.has('age'));             // check if key exists in map


// iterate over map.........
for(let x of map){
    console.log(x[0], x[1]);
}
