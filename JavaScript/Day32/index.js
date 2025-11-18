async function getData() {
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const parent = document.querySelector('#first');

        for (let x of data) {
            const div = document.createElement('div');
            div.classList.add('user');  

            const img = document.createElement('img');
            img.src = x.image;
            const h4 = document.createElement('h4');
            h4.textContent = x.title;
            const h5 = document.createElement('h5')
            h5.textContent = x.category;

            div.append(img, h4, h5);
            parent.append(div);
        }
    }
    catch(Error){
        console.log("Error");
    }
    
}

getData();

