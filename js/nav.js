$(function(){
    // nav收缩展开
    $('.nav-item>a').on('click', function () {
        $(".nav ul ul li").removeClass('active');
        $('.nav-item').children('ul').slideUp(300);
        if ($(this).next().css('display') == "none") {
            //展开
            $('.nav-item').children('ul').slideUp(300);
            $(this).next('ul').slideDown(300);
            $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
        } else {
            //收缩
            $(this).next('ul').slideUp(300);
            $('.nav-item.nav-show').removeClass('nav-show');
        }
    });
});