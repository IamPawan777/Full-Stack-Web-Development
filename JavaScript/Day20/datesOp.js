// UTC Format: YEAR MONTH DAY HOUR MINUTE SECOND MILLISECOND
const t = new Date();
console.log(t);                     // 2025-10-27T17:54:26.460Z
console.log(t.toString());          //Mon Oct 27 2025 23:24:26 GMT+0530 (India Standard Time)

console.log(t.toUTCString());       // Mon, 27 Oct 2025 17:54:26 GMT
console.log(t.toTimeString());      // 23:24:26 GMT+0530 (India Standard Time)
console.log(t.toLocaleString());    // 27/10/2025, 11:24:26 pm
console.log(t.toLocaleDateString());// 27/10/2025

console.log(t.getMonth());          // 9


// get UTC time.
const t2 = Date.now();
console.log(t2);                    // 1761587666522