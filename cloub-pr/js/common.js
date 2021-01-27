$(document).ready(function () {
    $(".todown a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    // 2 screen
    $('.take0, .take100').on('click', function (e) {
        e.preventDefault();
    });

    var jx = $('.juxtapose');

    $('.take0').click(function () {
        jx.find('.jx-handle').animate({ 'left': '100%' }, 400);
        jx.find('.jx-left').animate({ 'width': '100%' }, 400);
        jx.find('.jx-right').animate({ 'width': '0%' }, 400);
        $(this).parent().addClass('active');
        $('.take100').parent().removeClass('active');
    });

    $('.take100').click(function () {
        jx.find('.jx-handle').animate({ 'left': '0%' }, 400);
        jx.find('.jx-left').animate({ 'width': '0%' }, 400);
        jx.find('.jx-right').animate({ 'width': '100%' }, 400);
        $(this).parent().addClass('active');
        $('.take0').parent().removeClass('active');
    });

    // burger menu

    $('.burger-btn').click(function () {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('header').css('z-index', 111);
    });

    $('.closemenu').click(function () {
        $('.header__menu').removeClass('active');
        $('header').css('z-index', 99);
    });

    // menu

    if ($(window).width() < 1025) {
        $('.header__menu ul li.dropdown span').click(function () {
            $(this).next('.sublist').slideToggle();
        });
        $('.footer__nav>ul>li span').click(function () {
            $(this).next('.footer__submenu').slideToggle();
        });
    }

    // scroll to top
    (function ($) {
        $(function () {
            $('#up').click(function () {
                $('html, body').animate({ scrollTop: 0 }, 1000);
                return false;
            })
        })
    })(jQuery)

    // price slider


    if ($(".reviews").length) {
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }


    if ($(".portfolio").length) {
        var swiper1 = new Swiper('.portfolio', {
            slidesPerView: 'auto',
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        swiper1.appendSlide('<div class="swiper-slide swiper-clearfix"></div>')
    }



    var leftmarg = (($(window).width() - $('.container').width()) / 2);
    $('.portfolio .swiper-wrapper').css('padding-left', leftmarg);

    $(window).resize(function () {
        var leftmarg = (($(window).width() - $('.container').width()) / 2);
        $('.portfolio .swiper-wrapper').css('padding-left', leftmarg);
    });

    var leftSliderArrow = (($(window).width() - $('.container').width()) / 2);
    $('.portfolio-slider .swiper-button-next, .portfolio-slider .swiper-button-prev').css('left', leftSliderArrow);

    $(window).resize(function () {
        var leftSliderArrow = (($(window).width() - $('.container').width()) / 2);
        $('.portfolio-slider .swiper-button-next, .portfolio-slider .swiper-button-prev').css('left', leftSliderArrow);
    });

    // Portfolio modal
    $('.portfolio-slider .slidesect').click(function () {
        $('.modalwindow-wrap').show();
        $('body').addClass('overhidd');
    });


    $('.close-modal').click(function () {
        $('.modalwindow-wrap').hide();
        $('body').removeClass('overhidd');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".portfmodal__section, .consultation__section").length === 0) {
            $('.modalwindow-wrap').hide();
            $('body').removeClass('overhidd');
        }
    });

    // modal main page
    $('.modal-consult').click(function () {
        $('.modalwindow-wrap').show();
        $('body').addClass('overhidd');
    });

    $('.consultation__section form button').click(function () {
        $('.modalwindow-wrap').hide();
        $('.access-section').show();
    });

    $('.access-modal .close-modal').click(function () {
        $('.access-section').hide();
        $('body').removeClass('overhidd');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".access__section").length === 0) {
            $('.access-section').hide();
            $('body').removeClass('overhidd');
        }
    });
});








