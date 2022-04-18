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
        $(this).children(".cover").fadeOut();
      },
      function () {
        $(this).width("calc(100% / 3)");
        $(this).children().get(0).pause();
        $(this).children(".cover").fadeIn();
      }
    );
  } else {
    $(".main-item").click(function () {
      $(".main-item").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).children(".text").css("display") == "none") {
        $(this).children(".text").slideDown(500);
        $(this).children().get(0).play();
        $(this).children(".cover").fadeOut();
      } else {
        $(this).children(".text").slideUp(500);
        $(this).children().get(0).pause();
        $(this).children(".cover").fadeIn();
      }
      $(".main-item").not(this).children(".text").slideUp(500);
      $(".main-item").not(this).children().get(0).pause();
      $(".main-item").not(this).children(".cover").fadeIn();
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
    navigation: {
      nextEl: ".news-related .swiper-btn-next",
      prevEl: ".news-related .swiper-btn-prev",
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
    navigation: {
      nextEl: ".testimonials-section .swiper-btn-next",
      prevEl: ".testimonials-section .swiper-btn-prev",
    },
  });

  var who = new Swiper(".who-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 28,
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
      el: ".who-slider .swiper-pagination",
      clickable: true,
    },
  });

  var recommended = new Swiper(".recommended-slider .swiper", {
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
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: ".recommended-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".recommended-slider .swiper-btn-next",
      prevEl: ".recommended-slider .swiper-btn-prev",
    },
  });

  var singleslider = new Swiper(".single-courses-slider .swiper", {
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
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: ".single-courses-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".single-courses-slider .swiper-btn-next",
      prevEl: ".single-courses-slider .swiper-btn-prev",
    },
  });

  var singleslider2 = new Swiper(".single-courses-slider2 .swiper", {
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
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: ".single-courses-slider2 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".single-courses-slider2 .swiper-btn-next",
      prevEl: ".single-courses-slider2 .swiper-btn-prev",
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
    $(".nav-acc>a").click(function () {
      $(".nav-panel").slideUp();
      $(this).siblings(".nav-panel").slideToggle();
    });
  }

  if ($(window).width() <= 992) {
    $(".cats-title").click(function () {
      $(".cats-list").slideToggle();
    });
  }

  $(window).scroll(function () {
    if ($(".numbers-cont").length > 0) {
      numbers();
    }
  });

  $(".scroll-btn").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
  });

  $(".user-btns .submit-btn").on("click", function (e) {
    $(".form-group").toggleClass("preview");
    $(this).parents(".user-btns").toggleClass("active");
  });

  $("input[name='status']").on("change", function (e) {
    $(".time-select").hide();
    $("#" + this.value + ".time-select").show();
  });
});

var a = 0;
function numbers() {
  if (a === 0 && $(this).scrollTop() >= $(".numbers-cont").offset().top - 500) {
    $(".number strong").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 1000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
    a = 1;
  }
}

function showPass(showPass) {
  sibling = showPass.parentElement.nextElementSibling;
  if (showPass.checked) {
    sibling.setAttribute("type", "text");
  } else {
    sibling.setAttribute("type", "password");
  }
}

function profileImg(input) {
  $(".user-img .img-cont img")[0].src = (
    window.URL ? URL : webkitURL
  ).createObjectURL(input.files[0]);
}
