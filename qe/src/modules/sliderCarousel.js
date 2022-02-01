// * класс слайдера Карусели

export default class Carousel {
  // настройки Карусельки передаем аргументами в конмтруктор
  
  constructor({
    main, // селектор блока всего слайдера
    wrap, // селектор обертка карусельки
    next, // селектор кнопка следующий слайд
    prev, // селектор кнопка предыдущий слайд
    position = 0, // текущая позиция слайда
    slidesToShow = 3, // слайдов на один показ
    infinity = true, // будет ли каруселька крутиться вечно
    animate = false, // есть ли автоматическая анимация // 

  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slides = document.querySelector(wrap).children;
    this.slidesToShow = slidesToShow; //количество слайдов за один показ
    this.options = {
      // переделать опции
      position, // текущая позиция слайдов
      infinity: infinity,
      widthSlide: Math.floor(100 / this.slidesToShow), // в %
    };
  }

  init() {
    this.addGloClass();
    this.addStyle();

    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
  }

  // * добавляет наши glo- классы к элементам слайдера
  addGloClass() {
    // добавляем дополнительные свои стили от GLO
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }

  // * стилизуем наш слайд и кнопки
  addStyle() {
    const style = document.createElement('style');
    style.id = 'sliderCarousel-style';
    style.textContent = `
.glo-slider {
    overflow: hidden !important;
}
.glo-slider__wrap {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    transition: transform 0.5s !important;
    will-change: transition !important;
}
.glo-slider__item {
    flex: 0 0 ${this.options.widthSlide}% !important;
    margin: auto 0 !important;
}
.glo-slider__prev,
.glo-slider__next {
    margin: 0 12px;
    border: 12px solid transparent;
    background: transparent;
}
.glo-slider__next {
    border-left-color: #19b5fe;
}
.glo-slider__prev {
    border-right-color: #19b5fe;
}

.glo-slider__next:hover,
.glo-slider__prev:hover,
.glo-slider__next:focus,
.glo-slider__prev:focus {
    background: transparent;
    outline: transparent;
}
`;
    document.head.appendChild(style); // добавить блок слидей в head html страницы
  }


  controlSlider() {
    //чтобы не потерять контекст нужен bind
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    // перематываем на предыдущий слайд
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.slides.length - this.slidesToShow;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }

  nextSlider() {
    // перематываем на следующий слайд
    if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
      ++this.options.position;
      if (this.options.position > this.slides.length - this.slidesToShow) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }
}
