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

})
