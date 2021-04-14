//product.js
$(function () {

    // VARIABLES


    // EVENTS


    // FUNCTIONS


    //VENDORS
    var galleryThumbs = new Swiper('.pthumbs', {
        spaceBetween: -1,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        grabCursor: true,
        breakpoints: {
            // when window width is >= 769px
            768: {
                slidesPerView: 4,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
            },
        },
    });

    var galleryTop = new Swiper('.pslider', {
        navigation: {
            nextEl: '.product__next',
            prevEl: '.product__prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    var galleryThumbs2 = new Swiper('.pthumbs2', {
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        grabCursor: true,
        breakpoints: {
            // when window width is >= 769px
            768: {
                slidesPerView: 6,
                spaceBetween: 15,

            },
            // when window width is >= 992px
            992: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
        }
    });

    var galleryTop2 = new Swiper('.pgallery__container', {
        navigation: {
            nextEl: '.pgallery__next',
            prevEl: '.pgallery__prev',
        },
        thumbs: {
            swiper: galleryThumbs2
        }
    });

    let tabs = new Tabs('.ptabs')

});

class Tabs{
    constructor(selector) {
        this.tabs = document.querySelector(selector);
        this.items = this.tabs.querySelectorAll('.ptabs__item');
        this.swList = this.tabs.querySelectorAll('.ptabs__sw');
        this.activeIndex = 0;

       this.#init();
    }

    #init(){
        this.swList.forEach(sw=>{
            sw.addEventListener('click', (e)=>{
                let btn = e.currentTarget
                let x = [...this.swList].findIndex(i=>i==btn);

                if (this.activeIndex == x) {
                    return;
                }

                this.hide();
                this.activeIndex = x;
                this.show();
                this.setHeight();

            });
        });

        this.setHeight();
    }

    get activeItem(){
        return this.items[this.activeIndex]
    }

    show(){
        this.activeItem.classList.add('active');
    }

    hide(){
        this.activeItem.classList.remove('active');
    }

    setHeight(){
        let swHeight = this.swList[0].offsetHeight;
        let tabHeight = this.activeItem.querySelector('.ptabs__tab').offsetHeight;
        this.tabs.style.height = swHeight+tabHeight+'px';
    }
}