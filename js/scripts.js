$(document).ready(function () {
    if($(window).innerWidth() > 1000) {
        $('.products-trigger').click(function(e) {
            e.preventDefault();
            $('.menu-link.products-trigger').addClass('active');
            $('.main-block').hide();
            $('.products-block').fadeIn(300);
        });
        $('.main-trigger').click(function(e) {
            e.preventDefault();
            $('.menu-link.products-trigger').removeClass('active');
            $('.products-block').hide();
            $('.main-block').fadeIn(300);
        });
    }

    $('.burger').click(function(e){
        e.preventDefault();
        (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");

        $('.menu-links').toggleClass('active');
        $('body').on('click', function (e) {
            var div = $('.menu-links, .burger');

            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });

    if($(window).innerWidth() <= 1000) {
        $('.anchor[href^="#"]').click(function () {
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top-150;
            $('html, body').animate( { scrollTop: destination }, 500, 'swing' );
            return false;
        });
    }

	function OpenPopup(popupId) {
        $('body').removeClass('no-scrolling');
        $('.popup').removeClass('js-popup-show');
        popupId = '#' + popupId;
        $(popupId).addClass('js-popup-show');
        $('body').addClass('no-scrolling');
    }
    $('.pop-op').click(function (e) {
        e.preventDefault();
        let data = $(this).data('popup');
        OpenPopup(data);
    });
    function closePopup() {
        $('.js-close-popup').on('click', function (e) {
            e.preventDefault();
            $('.popup').removeClass('js-popup-show');
            $('body').removeClass('no-scrolling');
        });
    }
    closePopup();
    function clickClosePopup(popupId) {
        popupId = '#' + popupId;
        $(popupId).removeClass('js-popup-show');
        $('body').removeClass('no-scrolling');
    }

    if ($('.main-products').length) {

        function swipperInit() {
            var wrap = $('.main-products');

            var swiper = new Swiper(wrap, {
                slidesPerView: 2,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },

                effect: 'coverflow',
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 20,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false
                },

                loop: true,
                speed: 400,
                observer: true,
                observeParents: true,

                preloadImages: false,
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 3
                }
            });
            swiper.init();
        }

        function swipperInitEdge() {
            var wrap = $('.main-products');

            new Swiper(wrap, {
                slidesPerView: 'auto',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },

                centeredSlides: true,

                loop: true,
                speed: 400,
                observer: true,
                observeParents: true,

                preloadImages: false,
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 3
                }
            });
        }
        if (/Edge/.test(navigator.userAgent)) {
            swipperInitEdge();
        } else {
            swipperInit();
        }

    }

    var galleryThumbs1 = new Swiper('.gallery-thumbs1', {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    var galleryTop1 = new Swiper('.gallery-top1', {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs1
        }
    });

    var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    var galleryTop2 = new Swiper('.gallery-top2', {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs2
        }
    });

    var galleryThumbs3 = new Swiper('.gallery-thumbs3', {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    var galleryTop3 = new Swiper('.gallery-top3', {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs3
        }
    });

    var galleryThumbs4 = new Swiper('.gallery-thumbs4', {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    var galleryTop4 = new Swiper('.gallery-top4', {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs4
        }
    });

    var galleryThumbs5 = new Swiper('.gallery-thumbs5', {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    var galleryTop5 = new Swiper('.gallery-top5', {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs5
        }
    });

    var galleryThumbs6 = new Swiper('.gallery-thumbs6', {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    var galleryTop6 = new Swiper('.gallery-top6', {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs6
        }
    });
});