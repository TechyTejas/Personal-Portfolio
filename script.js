const header = document.querySelector("header")

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky",window.scrolly>120);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    // 55min/
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

    