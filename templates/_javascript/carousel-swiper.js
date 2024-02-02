const swiper = new Swiper('.swiper', {
  loop: true,
  freeMode: true,
  spaceBetween: 32,
  grabCursor: true,
  slidesPerView: 6,
  loop: true,
  autoplay: true,
  freeMode: false,
  speed: 1000,
  disableOnInteraction: true,
  freeModeMomentum: false,
  allowSlidePrev: true,
  allowSlideNext: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 6,
      spaceBetween: 32
    }
  }
});

const previousButton = document.querySelector('.carousel__buttons__button--left');
const nextButton = document.querySelector('.carousel__buttons__button--right');

previousButton.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slidePrev();
  // console.log("clicked right");
});

nextButton.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slideNext();
  // console.log("clicked right");
});