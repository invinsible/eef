const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-wrapper');

menuBtn.addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('active');
    menu.classList.toggle('active');
});