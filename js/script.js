// Выпадающее меню
$(document).ready(function(){
    $('.menu-item').hover(function () {
        clearTimeout($.data(this,'timer'));
        $('ul',this).stop(true,true).slideDown(150);
    }, function () {
        $.data(this,'timer', setTimeout($.proxy(function() {
            $('ul',this).stop(true,true).slideUp(120);
        }, this), 100));
    });
});

$(document).ready(function () {
    $('.accordion-tabs').children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
    $('.accordion-tabs').on('click', 'li > a', function(event) {
        if (!$(this).hasClass('is-active')) {
            event.preventDefault();
            $('.accordion-tabs .is-open').removeClass('is-open').hide();
            $(this).next().toggleClass('is-open').toggle();
            $('.accordion-tabs').find('.is-active').removeClass('is-active');
            $(this).addClass('is-active');
        } else {
            event.preventDefault();
        }
    });
});


function openNav() {
    if($(window).width() < 1230){
        document.getElementById("mySidebar").style.width = "95%";
    }else {
        document.getElementById("mySidebar").style.width = "85%";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

$(function(){

    var swiper = new Swiper(".slider-list-row", {
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiperArticles = new Swiper(".slider-list-services-articles", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".services-button-articles-next",
            prevEl: ".services-button-articles-prev",
        },
    });

    var swiperServicesSmi = new Swiper(".slider-list-services-smi", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".services-button-smi-next",
            prevEl: ".services-button-smi-prev",
        },
    });

    var review = new Swiper(".slider-list-review", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".next-slider-review-button",
            prevEl: ".prev-slider-review-button",
        },
        breakpoints: {
            // when window width is >= 320px
            1030: {
                slidesPerView: 2,
            }
        }
    });

    new SlimSelect({
        select: "#service",
        settings: {
            showSearch: false,
        },
        option: {
          style: 'height:48px'
        }
    })

    new SlimSelect({
        select: "#public",
        settings: {
            showSearch: false,
        }
    })

    new SlimSelect({
        select: "#face",
        settings: {
            showSearch: false,
        }
    })

})

$(document).ready(function() {
    $(".content-block-text").each(function() {
        let th = $(this);
        console.log(th.prop('scrollHeight'))
        if (th.prop('scrollHeight') > th.height()) {
            let more = th.next(".show-all-container").find(".show-all");
            th.next(".show-all-container").show();
            th.addClass("content-block-text-shadow");
            more.click(function() {
                more.toggleClass('active');
                th.toggleClass("content-block-text-shadow content-block-text-open");

            });
        }
    });
})

var slidemenubutton = $('.slide-menu-button');
slidemenubutton.css('background', 'transparent');
$(document).ready(function () {
if($(window).width() < 914){
    $(window).scroll(function () {
        let bodyScroll = $(window).scrollTop();
        let offsetHeight = $('header').innerHeight();
        if (bodyScroll >= offsetHeight) {
            slidemenubutton.css('background', '#ffffff');
        } else {
            slidemenubutton.css('background', 'transparent');
        }
    });
}else{
    slidemenubutton.css('background', 'transparent');
};
});


