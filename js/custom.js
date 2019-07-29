jQuery(function ($) {

    $(document).ready(function () {
        $('.slider-visible').slick({

            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $('.scroll'),
            prevArrow: '#scroll-right',
            nextArrow: '#scroll-left'
        })
    })
})