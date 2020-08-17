const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('active');
    document.body.classList.toggle('show-menu');
});