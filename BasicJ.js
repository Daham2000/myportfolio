const hamburger =document.querySelector('.hamburger');
const navLinks=document.querySelector('.buttons');
const  links=document.querySelectorAll('.buttons li');

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});

function scrollWin(x, y) {
    window.scrollTo(x, y);
}

function opencontact() {
    window.open("Contct.html");
}