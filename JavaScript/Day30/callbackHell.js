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
    }, 2000);
}

function deliverFood(){
    console.log("3. Delivering food.......!");  
    setTimeout(() =>{
        console.log("Food delivered!");
    }, 2000);
}

// orderFood(prepareFood);          // this will work only with two functions.........

// So, we need to use anonymous function or arrow function to pass prepareFood with its callback
orderFood(() =>{
    prepareFood(() =>{
        deliverFood();
    });
})