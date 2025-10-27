let s1 = "Pawan";
let s2 = 'Pawan Bisht';
let s3 = `Coming as soon 
            as posible ` + s2;
let s4 = `Coming as soon 
            as posible ${s2}`;
console.log(s4);            //Coming as soon 

console.log(s1.length);         // 5
console.log(s1[2]);             // w

// upper case and lower case.......
console.log(s1.toUpperCase())     // PAWAN
console.log(s1.toLowerCase())     // pawan

// index substring.......
console.log(s2.indexOf(`Bis`));         // 6        (from starting)
console.log(s2.lastIndexOf(`Bis`));         // 6    (form last)

// substring........
console.log(s2.slice(1, 4));
console.log(s2.slice(3));
console.log(s2.slice(-3, -1));

// concate string......
let s5 = `hello`;
let s6 = `hey`;
let add = s5+s6;
console.log(add);


// replace()...........only one place
let s7 = "Pawan";
console.log(s7.replace("Paw", "Bis"));


// replaceAll()...........everywere
let s8 = "Pawan Pawan";
console.log(s8.replaceAll("Paw", "Bis"));


// remove space from end and start... 
let s9= '        Harry Joshi  ';
console.log(s9.trim());

// split / break into array element........
let s10 = `Lokesh,  Om,  Dvesh,  Harry,  Son`;
console.log(s10.split(",  "));