// 1. onclick event........once at a time (override)......
// function clickHere() {
//     const element = document.querySelector("#first");
//     element.textContent = "You clicked the button!";
// }

//or...........

// const element = document.getElementById("first");
// element.onclick = function clickHere() {            //or....... function() {
//     element.textContent = "You clicked the button!";
//     element.style.color = "red";
// }




// // 2. addEventListener() method -> 'click'.......multiple at a time.......
// const element = document.getElementById("first");               
// element.addEventListener("click", function clickHere() {        // "click" -> single click event
//     element.textContent = "You clicked the button!";
//     element.style.color = "red";
// });

// element.addEventListener("dblclick", () => {                // "dblclick" -> double click event
//    element.style.backgroundColor = "yellow";
// });

// element.addEventListener("mouseleave", () => {                // "mouseenter", "mouseleave" -> mouse hover event
//    element.style.border = "2px solid green";
// });

// // looping through multiple elements and adding event listener to each of them...........
// const element = document.getElementById("parent"); 
// console.log(element.children);
// for(let c of element.children){
//     c.addEventListener("click",() =>{
//         c.style.backgroundColor = "black";
//         c.textContent = "Clicked";
//         c.style.color = "white";
//     })
// }

//or.......

// // event object -> target property -> to know which element triggered the event.......
// const element = document.getElementById("parent"); 
// element.addEventListener("click", (e) => {
//     console.log(e.target);
//     e.target.style.backgroundColor = "black";
//     e.target.textContent = "Clicked";
//     e.target.style.color = "white";
// });




// // event bubbling -> child to parent.......
// const grandParent = document.getElementById("grandParent"); 
// grandParent.addEventListener("click", (e) => {  
//     console.log(e.target);
//     // console.log("grand parent");
// });





// // removing event listener.......callback reference should be same.......
// const element = document.getElementById("parent");               
// // function clickHere(e) {   
// const clickHere = (e) => {     
//     e.target.style.backgroundColor = "black";
//     e.target.textContent = "Clicked";
//     e.target.style.color = "white";
//     element.removeEventListener("click", clickHere);                // removing event-listener after first click
// }

// element.addEventListener("click", clickHere);




// background color changer on button click.......
const btn = document.getElementById("btn");
let currMode = 'light';
btn.addEventListener("click", () => {
    if(currMode === 'light'){
        currMode = 'dark';
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        currMode = 'light';
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});


