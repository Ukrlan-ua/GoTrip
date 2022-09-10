// Carousel

  const owl = $('.owl-carousel');
owl.owlCarousel({
    // включаем отслеживание центрального объекта
    center: true,
    // циклим
    loop: true,
    // номер старотового сблока
    startPosition: 1,
    items: 3,
    responsive: {
        1200: {
            margin: 30
        },

        660: {
            items: 3,
            margin: 20,
        },

        0: {
            margin: 20,
            items: 2
        },


    }
});
// Go to the next item
$('.slider-btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slider-btn--prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

// Burger

const nav = document.querySelector('.nav')

$(function() {
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });
});

nav.onclick = function () {
    nav.classList.toggle('nav-mobile')
    document.body.classList.toggle('no-scroll')
}