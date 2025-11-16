// example 1.......
function orderFood(){
    console.log("1. Ordering food.......!");
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Food ordered!");
            resolve();
        }, 3000);
    });
}
function prepareFood(){
    console.log("2. Preparing food.......!");
    return new Promise((resolve, reject) => {
        setTimeout(function fun() {
            console.log("Food prepared!");
            resolve();
        }, 2000);
    });
}
function deliverFood(){
    console.log("3. Delivering food.......!");  
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        console.log("Food delivered!");
        resolve();
        }, 2000);
    });

}

//1. callback hell.....
// orderFood(() =>{
//     prepareFood(() =>{
//         deliverFood();
//     });
// })

// 2. promise().......
orderFood()
    .then((response) => {
        return prepareFood();
    })
    .then((response) => {
        return deliverFood();
    })
    .catch((error) =>{
        console.log("Some-thing wrong...");
    });






// // example 2..............
// function getData(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(data);
//             resolve("success data");
//             // reject("fail data");
//         }, 1000);
//     });
// }
// getData(11)
//     .then((response1) => {         
//         return getData(22);
//     })
//     .then((response2) => {
//         return getData(33);
//     })
//     .then((response4) => {
//         return getData(44);
//     })
//     .then((response) => {
//         console.log(response);
//     }).catch((error) => {                          // rejected
//         console.log("Problem", error);
//     });



    