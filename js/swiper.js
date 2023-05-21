import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

var swiper = new Swiper('.heroSwiper', {
  slidesPerView: 1.5,
  spaceBetween: 0,
  grabCursor: true,
  //centeredSlides: true,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
