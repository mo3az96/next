$(window).on("load", function () {
  $("body").removeClass("overflow");
  lazyLoad();
});
$(document).ready(function () {
  $(".main-item").hover(
    function () {
      $(this).width("45%");
      $(this).children().get(0).play();
    },
    function () {
      $(this).width("calc(100% / 3)");
      $(this).children().get(0).pause();
    }
  );

  var partners = new Swiper(".partners-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
      1700: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
    },
    pagination: {
      el: ".partners-slider .swiper-pagination",
      clickable: true,
    },
  });

  var courses = new Swiper(".courses-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1700: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: ".courses-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".courses-slider .swiper-btn-next",
      prevEl: ".courses-slider .swiper-btn-prev",
    },
  });

  var news = new Swiper(".news-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: ".news-slider .swiper-pagination",
      clickable: true,
    },
  });

  var news = new Swiper(".testimonials-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: ".testimonials-section .swiper-pagination",
      clickable: true,
    },
  });
});
