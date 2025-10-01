const menuBtn = document.querySelector('.menuBtn')
const closeBtn = document.querySelector('.closeBtn')
const menu = document.querySelector('.menu')



function openMenu() {
    menu.style.display = 'block';
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'block';
}

function closeMenu() {
    menu.style.display = 'none';
    menuBtn.style.display = 'Block'
    closeBtn.style.display = 'none';
}

