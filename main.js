const pchela1 = document.querySelector('.pchela1')
const pchela2 = document.querySelector('.pchela2')
const pchela3 = document.querySelector('.pchela3')
const pchela4 = document.querySelector('.pchela4')
const pchela5 = document.querySelector('.pchela5')
const pchela6 = document.querySelector('.pchela6')
const line = document.querySelector('.line')
const line2 = document.querySelector('.line2')
const vetka1 = document.querySelector('.vetka1')
const vetka2 = document.querySelector('.vetka2')
const vetka3 = document.querySelector('.vetka3')
const nav = document.querySelector('.navigation')
const med = document.querySelector('.med')
const parag = document.querySelector('.parag')
const info = document.querySelector('.intro_info')
const footeer = document.querySelector('.intro_footer')

window.addEventListener("load", () => {
    pchela1.classList.add('active')
    pchela2.classList.add('active')
    pchela3.classList.add('active')
    pchela4.classList.add('active')
    pchela5.classList.add('active')
    pchela6.classList.add('active')
    line.classList.add('active')
    line2.classList.add('active')
    vetka1.classList.add('active')
    vetka2.classList.add('active')
    vetka3.classList.add('active')
    nav.classList.add('active')
    med.classList.add('active')
    parag.classList.add('active')
    info.classList.add('active')
    footeer.classList.add('active')
})


const popup = document.querySelector('.chat_popup');
const closeChat = document.querySelector('.close_chat');

closeChat.addEventListener('click', () => {
    popup.classList.add('close')
    popup.classList.remove('active')
});


const chatBtn = document.querySelector('.chat_btn')
chatBtn.addEventListener('click', () => {
    popup.classList.remove('close')
    popup.classList.add('active')
});