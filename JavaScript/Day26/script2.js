// create a new h2 element
const newh2Ele = document.createElement("h2");          // create h2 tag
newh2Ele.textContent = "This is h2 tag created by JS";
newh2Ele.id = "second";
newh2Ele.className = "myclass";
newh2Ele.style.color = "brown";
newh2Ele.style.fontSize = "15px";

// append the element to the body
const element = document.querySelector("#first");           // select h1 element
element.after(newh2Ele);
// element.before(newh2Ele);





// // // create a new li element
// const list1 = document.createElement("li");              // create li tag
// list1.textContent = "Apple";
// const list2 = document.createElement("li");
// list2.textContent = "Banana";

// const unEle = document.querySelector("ul")
// unEle.append(list1);
// unEle.append(list2);
// // unEle.before("Fruits List: ");

// ...........or...........
const Fruits = ["Mango", "Pineapple", "Grapes", "Orange"];
const unEle = document.querySelector("ul");                     // select ul element
const frag = document.createDocumentFragment();
for(let x of Fruits){
    const list = document.createElement("li");
    list.textContent = x;
    frag.appendChild(list);
}
unEle.append(frag);




// // // Remove/Delete an element........
// const h1Ele = document.querySelector("h1");
// h1Ele.remove();