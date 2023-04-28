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


function openNav() {
    document.getElementById("mySidebar").style.width = "85%";
}


/* Установите ширину боковой панели в 0 (скройте ее) */
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




