// console.log("Hello World");
// alert("This is my first JavaScript code!");

// console.log(document.body.childNodes);







//....selecting elements...
// by id....
// document.getElementById("first").style.color = "red";
// const sec = document.getElementById("second")
// sec.style.color = "green";

// // by class name...
// const elems = document.getElementsByClassName("myclass");
// elems[0].style.color = "pink";

// // by tag name...
// const elems = document.getElementsByTagName("h2");
// elems[0].style.color = "purple";

// // // by query selector...querySelector("id/class/tag");
// const elem = document.querySelector("h1");
// elem.style.color = "brown";





// property modification/update text only...
// 1. textContent
// const h2 = document.querySelector("h2");
// h2.textContent = "This is modified by JavaScript";

// 2. innerText
// const para = document.querySelector("p");
// para.innerText = "Hello World! This is changed by JavaScript.";

//3. innerHTML
// const div = document.querySelector("div");







// // ........ changes CSS properties........
// // document.body.style.backgroundColor = "gray";

// const sec = document.getElementById('second');
// sec.style.color = "Green";
// sec.style.fontSize = "30px";
// sec.style.border = "2px solid black";
// // div.innerHTML = "This is created by innerHTML <b>bold text</b>.";


// const sec = document.getElementById('first');
// // console.log(sec.style.cssText);          // get all css style properties
// sec.style.cssText = "color: blue; background-color: yellow; font-size: 25px;";   // set multiple css style properties


// add new css attribute
// const sec = document.getElementById('first');
// sec.setAttribute("style", "text-align: center; padding: 10px; color: pink;");
// sec.setAttribute("class", "myvalue");   // add new class attribute

// get attribute value
// console.log(newh2Ele.getAttribute("class"));