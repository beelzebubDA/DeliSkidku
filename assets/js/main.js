// header top links

let headerNavLinks = $(".header_nav-link");
headerNavLinks.each(function (btn) { 
    $(this).on("click", function (e) {
        e.preventDefault();
        $(this).addClass("active");
        headerNavLinks.not($(this)).removeClass("active");
    });
});

let headerMenuOpenBtn = $(".header_menu-open_btn");
let headerMenuCloseBtn = $(".header_mob-menu_close-btn");
let headerMenu = $(".header_nav");

headerMenuOpenBtn.on("click", function (e) {
    e.preventDefault();
    headerMenu.addClass("active");
});
headerMenuCloseBtn.on("click", function (e) {
    e.preventDefault();
    headerMenu.removeClass("active");
});
// hero swiper
let heroSwiper = new Swiper(".hero_swiper", {
    navigation: {
        nextEl: ".hero_swiper-btnN",
        prevEl: ".hero_swiper-btnP",
    },
    breakpoints: {
        320: {
            slidesPerView: 0.37,
            spaceBetween: 4,
        },
        375: {
            slidesPerView: 0.57,
            spaceBetween: 4,
        },
        425: {
            slidesPerView: 0.8,
            spaceBetween: 4,
        },
        1199: {
            slidesPerView: 3.9,
            spaceBetween: 4,
        },
    },
});