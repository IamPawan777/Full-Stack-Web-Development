// function orderFood(callback){
//     console.log("1. Ordering food.......!");

//     setTimeout(() =>{
//         console.log("Food ordered!");
//         callback();
//     }, 3000);
// }

// function prepareFood(callback){
//     console.log("2. Preparing food.......!");
//     setTimeout(function fun() {
//         console.log("Food prepared!");
//         callback();
//     }, 2000);
// }

// function deliverFood(){
//     console.log("3. Delivering food.......!");  

//     // return new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//     console.log("Food delivered!");
//     // resolve()
//     }, 2000);
//     // });
//     // setTimeout(() =>{
//     //     console.log("Food delivered!");
//     // }, 2000);
// }

// // orderFood(prepareFood);          // this will work only with two functions.........

// // // So, we need to use anonymous function or arrow function to pass prepareFood with its callback
// // orderFood(() =>{
// //     prepareFood(() =>{
// //         deliverFood();
// //     });
// // })

// orderFood()
// .then(() => prepareFood())
// .then(() => deliverFood())






// example 2..............
function getData(data){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(data);
            resolve("success data");
            // reject("fail data");
        }, 1000);
    });
}
getData(11)
    .then((response1) => {         
        return getData(22);
    })
    .then((response2) => {
        return getData(33);
    })
    .then((response4) => {
        return getData(44);
    })
    .then((response) => {
        console.log(response);
    }).catch((error) => {                          // rejected
        console.log("Problem", error);
    });



    