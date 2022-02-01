/**
 * Главный слайдер в хэдере Реализовать слайдер следующим образом:
 * - три слайда, у каждого свой текст и своё бэкграунд-изображение .active opacity
 * - Слайды с автопрокруткой раз в три (3) секунды autoplay( )
 * - Дотсы // * .dot
 *  (точки переключения) реализовать по желанию.
 * Блок слайдера находится в блоке с классом // *  .top-slider
 */

const topSlider = () => {
  const slider = document.querySelector('.top-slider');
  const slides = slider.querySelectorAll('.item');
  const slidesLength = slides.length; // количество слайдов = 3
  const timeDelay = 3000; // смена слайдов каждые 3 секунды
  
  console.log('slider: ', slider);
  console.log('slides: ', slides);
  let currentSlide = 0;
  let timerInterval;

  const autoPlaySlide = () => {
    // скрываем все кроме текущего

    slides.forEach((slide, index) => {
      if (index == currentSlide) {
        slide.classList.add('item-active');
      } else {
        slide.classList.remove('item-active');
      }
    });

    //крутим текущий слайд
    if (currentSlide < 2) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
  };

  // смена слайдов
  const startSlide = () => {
    autoPlaySlide();

    timerInterval = setInterval(() => {
      autoPlaySlide();
    }, timeDelay);
  };
  startSlide();
};


export default topSlider;
