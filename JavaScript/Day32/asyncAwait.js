// function getData(dataId){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log(dataId);
//             resolve("completed bro");
//         }, 2000);
//     });
// }

// (async function() {
//     await getData(11);
//     await getData(22);
//     await getData(33);
//     await getData(44);
// })();




// // async return promise.......
// async function greet(){
//     return 'Pawan1';
// }
// greet()
//     .then((Response) => {
//         console.log(Response);
//     });




fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((Response) => Response.json())
    .then((Response) => console.log(Response));
// or......
async function getData() {   
    console.log("111111...");
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    const data = await response.json();
    console.log(data);
    console.log("222222...");
}
console.log("some thing...");
getData();                              // Asyncronous task
console.log("next...");





