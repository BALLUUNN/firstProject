let newDiv = document.createElement("div");
newDiv.innerHTML = '<h1>Привет!</h1>'

const text = document.querySelector('.text');
text.addEventListener('click', () => {
    if (text.style.color === 'red') {
        text.style.color = 'green'
    }
    else {
        text.style.color = 'red'
    }
});

const large = document.querySelector('.large');
const low = document.querySelector('.low');

large.addEventListener('click', () => {
    const fontSize = window.getComputedStyle(text).fontSize;
    text.style.fontSize = `calc(${fontSize} + 1px)`;
});
low.addEventListener('click', () => {
    const fontSize = window.getComputedStyle(text).fontSize;
    text.style.fontSize = `calc(${fontSize} - 1px)`;
});

