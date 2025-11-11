const red = document.querySelector('#red');
red.addEventListener('click', (e) => {
    document.body.style.backgroundColor = 'red';
    e.target.style.color = 'white';
    e.target.style.backgroundColor = 'red';
});


const blue = document.querySelector('#blue');
blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
    blue.style.color = 'white';
    blue.style.backgroundColor = 'blue';
});



const green = document.querySelector('#green');
green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
    green.style.color = 'white';
    green.style.backgroundColor = 'green';
});



const black = document.querySelector('#black');
black.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
    black.style.color= 'white';
    black.style.backgroundColor = 'black';
});
