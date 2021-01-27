$(document).ready(function () {
    // styling select
    $(function () {
        $('select').styler();
    });
    // left fixed nav
    if ($('.fixed-left-box').length > 0) {
        $(function () {
            $(document).scroll(function () {
                if ($(this).scrollTop() >= $('#hello').offset().top - 50) {
                    $(".fixed-left-box ul li").removeClass('active');
                    $(".fixed-left-box ul li:nth-child(4)").addClass('active');
                }
                if ($(this).scrollTop() >= $('#rad').offset().top - 50) {
                    $(".fixed-left-box ul li").removeClass('active');
                    $(".fixed-left-box ul li:nth-child(3)").addClass('active');
                }
                if ($(this).scrollTop() >= $('#app').offset().top - 50) {
                    $(".fixed-left-box ul li").removeClass('active');
                    $(".fixed-left-box ul li:nth-child(2)").addClass('active');
                }
            });
        });
    }


    // burger menu
    $('.phone-burger').click(function () {
        $('.header__nav').show();
    });
    $('.close-phone-menu').click(function () {
        $('.header__nav').hide();
    });

    // range slider
    if ($('.range-slider').length > 0) {
        $(function () {
            $(document).scroll(function () {
                var desiredHeight = $(window).height() - 100;
                if ($(this).scrollTop() >= $('#range-top').offset().top - desiredHeight) {
                    $(".range__linecontainer").addClass('active');
                    $('.range__point.red').addClass('pulse-anim');
                }

            });
        });
        $(function () {
            $(document).ready(function () {
                var desiredHeight = $(window).height() - 100;
                if ($(this).scrollTop() >= $('#range-top').offset().top - desiredHeight) {
                    $(".range__linecontainer").addClass('active');
                    $('.range__point.red').addClass('pulse-anim');
                }

            });
        });
    }






    $('.portfolio-slider').slick({
        centerMode: true,
        dots: true,
        infinite: false,
        variableWidth: true,
        slidesToShow: 1,
        focusOnSelect: true,
        arrows: false,
        initialSlide: 2,
        asNavFor: '.slider-nav.nah'
    });
    $('.slider-nav.nah').slick({
        // speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.portfolio-slider',
        dots: false,
        arrows: false,
    });


    $('.portfolio-slider-ah').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        asNavFor: '.slider-nav.ah'
        // variableWidth: true,
    });
    $('.slider-nav.ah').slick({
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.portfolio-slider-ah',
        dots: false,
        arrows: false,
    });

});