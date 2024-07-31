var swiper = new Swiper('.myFirstSwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 4000,
  },
});

//   slidesPerView: 1,
//   // spaceBetween: 10,
//   // loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     '@0.00': {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     '@0.75': {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     '@1.00': {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//     '@1.50': {
//       slidesPerView: 4,
//       spaceBetween: 50,
//     },
//   },
// });
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30, // Set space between slides
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      // Medium screens (e.g., tablets)
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      // Large screens (e.g., desktops)
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
