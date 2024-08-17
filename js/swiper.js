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
