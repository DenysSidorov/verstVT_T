
$(document).ready(function () {
    if ($('.navBurger').length > 0) {
        $('.navBurger').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('nonScroll');
            $(this).toggleClass('active')
                .parents('.mainMenuSection')
                .find('.menuSection ul')
                .toggleClass('active');
        });
    }

    $('.slider').slick({
        dots: true,
        arrows: true,
        autoplay: false
    });


    //$(window).scroll(function () {
    //    var scroll = $(window).scrollTop();
    //    var parallaxBlock = $('.contentGoodsSection').offset().top;
    //    var i = 0;
    //    if (scroll >= parallaxBlock - 200) {
    //        $(".parallaxService .serviceItem").each(function () {
    //            var block = $(this);
    //            i += 500;
    //            setTimeout(function () {
    //                block.addClass('active');
    //            }, i);
    //        });
    //    }
    //})
});
