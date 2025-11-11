const str = ["STRING 1", "STRING 2", "STRING 3", 'STRING 4', 'STRING 5', 'STRING 6', 'STRING 7', 'STRING 8', 'STRING 9', 'STRING 10'];


const word = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', ()=> {
    const ran = Math.floor(Math.random()*10);
    word.textContent = str[ran];
})
