// Initialize the first Swiper instance
var myFirstSwiper = new Swiper('.myFirstSwiper', {
  navigation: {
    nextEl: '.myFirstSwiper .swiper-button-next',
    prevEl: '.myFirstSwiper .swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 4000,
  },
});

// Initialize the second Swiper instance
// var mySwiper = new Swiper('.mySwiper', {
//   slidesPerView: 1,
//   spaceBetween: 30, // Set space between slides
//   loop: true,
//   navigation: {
//     nextEl: '.product-slider .swiper-button-next',
//     prevEl: '.product-slider .swiper-button-prev',
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 30,
//     },
//     768: {
//       // Medium screens (e.g., tablets)
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     1024: {
//       // Large screens (e.g., desktops)
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//   },
// });

function initializeSwiper(selector, nextEl, prevEl) {
  return new Swiper(selector, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: nextEl,
      prevEl: prevEl,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

var mySwiperTrending = initializeSwiper(
  '.mySwiperTrending',
  '.trending-next',
  '.trending-prev'
);
var mySwiperCollection = initializeSwiper(
  '.mySwiperCollection',
  '.collection-next',
  '.collection-prev'
);
