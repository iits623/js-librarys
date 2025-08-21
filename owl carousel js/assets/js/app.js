$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 4,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        480: {
            items: 2,
            nav: false,
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        }
    }

})