var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    center:true,
    responsiveClass: true,
    center: true,
    nav: true,
    navText: ["<div class='nav-button owl-prev'> <img src='./img/chelebi/icons/circle-arrow-left.png' /> </div>", "<div class='nav-button owl-next'><img src='./img/chelebi/icons/circle-arrow-right.png' /></div>"],
    responsive: {
        0: {
            items: 1.5,
            margin: 10
        },
        520: {
            items: 1.6,
            margin: 20
        },
        600: {
            items: 2,
        },
        670: {
            items: 2.8,
            margin: 20
        },
        800: {
            items: 3,
        },
        1000: {
            items: 3,
        },
        1100: {
            items: 3.6,
        }
        ,
        1101: {
            items: 4.6,
        }
    }

});

