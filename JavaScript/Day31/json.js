const jsObj = {
    name: "John",
    age: 30,
    city: "New York",
    subjcts: ["Math", "Science", "History"]
};           


// JS object -> JSON string (.stringify())
const json = JSON.stringify(jsObj);
console.log(json);              // {"name":"John","age":30,"city":"New York"}



// JSON string -> JS object (.parse())
const obj = JSON.parse(json);
console.log(obj);                   // {name: "John", age: 30, city: "New York"}