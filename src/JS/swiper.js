import Swiper from 'swiper';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/scss'
import 'swiper/scss/pagination'

const swiper = new Swiper('.swiper', {
    modules: [Pagination, Autoplay],
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 500,
    direction: 'horizontal',
    loop: true,


    pagination: {
        enabled: true,
        clickable: true,
        el: '.swiper-pagination',
    },

});
