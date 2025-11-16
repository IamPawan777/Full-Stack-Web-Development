// example 1...........
function orderFood(callback){
    console.log("1. Ordering food.......!");

    setTimeout(() =>{
        console.log("Food ordered!");
        callback();
    }, 3000);
}

function prepareFood(callback){
    console.log("2. Preparing food.......!");
    setTimeout(function fun() {
        console.log("Food prepared!");
        // deliverFood();                        // do not hard code deliverFood() here directly bcz want to make it reusable
        callback();
    }, 3000);
}

function deliverFood(){
    console.log("3. Delivering food.......!");  
    setTimeout(() =>{
        console.log("Food delivered!");
    }, 3000);
}
// a-> wrong way.....
// orderFood();
// prepareFood();
// deliverFood();

// b->wrong bcz only 2 function......
// orderFood(prepareFood);          // this will work only with two functions.........

//c. callbackHell... So, we need to use anonymous function or arrow function to pass prepareFood with its callback
orderFood(() =>{
    prepareFood(() =>{
        deliverFood();
    });
})





// // example 2..............
// function getData(data, callback){
//     setTimeout(()=>{
//         console.log(data);
//         if(callback)
//             callback();
//     }, 2000);
// }

// getData(11, ()=>{
//     getData(22, ()=>{
//         getData(33, ()=>{
//             getData(44);
//         });
//     })
// });