function createCounter() {
    let count = 0;                      // Private variable  
    let a = function dis() {
        count += 1;
        return count;
    };
    return a;                           // Return the inner function
}
const counter = createCounter();            // return lexical scope
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3