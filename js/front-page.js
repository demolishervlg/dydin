var slidemenubutton = $('.slide-menu-button');
slidemenubutton.css('opacity', '0');
    $(document).ready(function () {
        if($(window).width() > 914){
            $(window).scroll(function () {
                let bodyScroll = $(window).scrollTop();
                let offsetHeight = $('header').innerHeight();
                if (bodyScroll >= offsetHeight) {
                    slidemenubutton.css('opacity', '1');
                } else {
                    slidemenubutton.css('opacity', '0');
                }
            });
        }else{
            slidemenubutton.css('opacity', '1');
        };
    });