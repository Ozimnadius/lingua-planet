//index.js
$(function () {
    const banner = document.querySelector('.banner__slider');
    if (banner) {
        let bannerSwiper = new Swiper(banner, {
            slidesPerView: 1,
            effect: 'slide',
            loop: true,
            watchOverflow: true,
            // Navigation arrows
            navigation: {
                nextEl: '.banner__next',
                prevEl: '.banner__prev',
            },
            // If we need pagination
            pagination: {
                el: '.banner__pag',
                clickable: true
            },
            on: {
                init: function () {
                    initParams(this, banner);
                },
            },
        });
    }

    $('select').styler();

    let offersSwiper = new Swiper('.offers__swiper', {
        slidesPerView: 1.15,
        spaceBetween: 10,
        watchOverflow: true,
        centeredSlides: false,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.offers__next',
            prevEl: '.offers__prev',
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
                centeredSlides: true,
            }
        }
    });

    let revsSwiper = new Swiper('.revs__swiper', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        watchOverflow: true,
        // Navigation arrows
        navigation: {
            nextEl: '.revs__next',
            prevEl: '.revs__prev',
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 1.8,
                spaceBetween: 20,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    $('input[type=tel]').mask('+7 (999) 999-99-99');

});