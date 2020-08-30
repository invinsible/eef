// const menuBtn = document.querySelector('.menu-btn');

// menuBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     this.classList.toggle('active');
//     document.body.classList.toggle('show-menu');
// });

$('.menu-btn').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(document.body).toggleClass('show-menu');
});

if ( $(window).width() < 901 ) {
    $('.hasSub').click(function(e){
        e.preventDefault();
        $(this).next().toggleClass('show-sub');
        $('.menu__link').addClass('hidden');
    })
    
    $('.menu__back').click(function(){
        $(this).parent().removeClass('show-sub');
        $('.menu__link').removeClass('hidden');
    });
}


$(".carousel").owlCarousel({                
    items: 1,
    loop:true,
    dots: false,
    nav:true,       
});

$('.scrollLink').click(function (e){
    e.preventDefault();
    //let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $('.main-about__grid').offset().top
    }, 1000);
});