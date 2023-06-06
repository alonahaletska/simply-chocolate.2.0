const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-our-product',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination-our-product',
    clickable: true, // что-бы сделать пагинацию кликабельной
  },
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },

  
});
