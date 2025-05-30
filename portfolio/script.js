let menu_icon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.nav-barre')
menu_icon.addEventListener('click',()=>{
    menu_icon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
