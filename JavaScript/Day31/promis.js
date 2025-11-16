const data = fetch("https://api.thecatapi.com/v1/images/search?limit=10");           // promise pending state......
console.log(data);

data.then((response) => {            
  return response.json();
}).then((catData) => {                // fulfilled/resolve state......    
  console.log(catData);
}).catch((error) => {                  // reject state......
  console.error("Error fetching data:", error);
});


// or..........promise chaining

fetch("https://api.thecatapi.com/v1/images/search?limit=10")                // fetch returns a promise
    .then((response) => response.json())                                 // response.json() also returns a promise
    .then((catData) => {                                               // fulfilled/resolve state......
        console.log(catData); 
    });                                                  // .catch() can be added here for error handling

    

// with HTML..
const h1 = document.createElement('H1');
h1.textContent = "Cat Images...";
document.body.prepend(h1);

const parent = document.querySelector('#first');
fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response) => response.json())      
    .then((catData) => {                      
        catData.forEach((cat) => {
            const img = document.createElement('img');
            const h4 = document.createElement('h4');
            img.src = cat.url;
            img.style.width = '200px';
            img.style.margin = '10px';
            h4.style.display = 'inline';

            h4.textContent = `ID: ${cat.id}`;
            parent.appendChild(img);
            parent.appendChild(h4);
        })
    }).catch((error) => {                  
        const h2 = document.createElement("h2");
        h2.textContent = "Something went wrong while fetching cat images.";
        document.body.append(h2);
    });







    