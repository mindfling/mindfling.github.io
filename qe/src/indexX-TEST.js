'use strict';
/** Quantum electrician Diploma project */

import togglePopup from './modules/togglePopup.js';
import sendForm from './modules/sendForm.js';
import handleMenu from './modules/handleMenu.js';
import scrollUp from './modules/scrollUp.js';
import topSlider from './modules/topSlider.js';
import Carousel from './modules/sliderCarousel.js';
import accordeon from './modules/accordeon.js';

topSlider();
togglePopup();
handleMenu();
scrollUp();
accordeon();
sendForm();


const carousel = new Carousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    next: '.arrow-right',
    prev: '.arrow-left',
    slidesToShow: 3
});
carousel.init();

