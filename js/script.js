const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120); // Corrected "scrolly" to "scrollY"
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    console.log("tejas is good byo")
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
});
