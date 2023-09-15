$(function () {
    $('.categ_all').click(function () {
        $('#nav_slide_wrap').stop().slideToggle();
    });

    $('.icon_cancel').click(function () {
        $('#nav_slide_wrap').stop().slideUp();
    });

});

