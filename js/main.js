$(window).on("load", function () {
  $("body").removeClass("overflow");
  lazyLoad();
});
$(document).ready(function () {
  if ($(window).width() > 1199) {
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
  } else {
    $(".main-item").click(function () {
      $(".main-item").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).children(".text").css("display") == "none") {
        $(this).children(".text").slideDown(500);
        $(this).children().get(0).play();
      } else {
        $(this).children(".text").slideUp(500);
        $(this).children().get(0).pause();
      }
      $(".main-item").not(this).children(".text").slideUp(500);
      $(".main-item").not(this).children().get(0).pause();
    });
  }
  var partners = new Swiper(".partners-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
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
        slidesPerView: 1,
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
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
    },
    pagination: {
      el: ".news-slider .swiper-pagination",
      clickable: true,
    },
  });

  var testimonials = new Swiper(".testimonials-slider .swiper", {
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

  ///////// **footer** /////////
  if ($(window).width() <= 1199) {
    $(".footer-list-title").addClass("mo-accordion");
    $(".footer-list").addClass("mo-panel");
  }
  ///////// **ACC** /////////
  $(".mo-accordion").click(function () {
    $(".mo-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("display") == "none") {
      $(this).siblings().slideDown(500);
    } else {
      $(this).siblings().slideUp(500);
    }
    $(".mo-accordion").not(this).siblings().slideUp(500);
  });

  ///////// **menu** /////////
  if ($(window).width() <= 1199) {
    $(".menu-btn").click(function () {
      $(".header-nav").slideDown();
      $("body").addClass("overflow");
    });
    $(".close-btn").click(function () {
      $(".header-nav").slideUp();
      $("body").removeClass("overflow");
    });
    $(".user-mobile>a").click(function () {
      $(".user-mobile-list").slideToggle();
    });
  }

  if ($(window).width() <= 992) {
    $(".cats-title").click(function () {
      $(".cats-list").slideToggle();
    });
  }
});
