/* eslint-disable max-len */
// * test fly vertical airplane move with vertical

const calcPositionFly = (fly) => {
  // расчет самолетика с-верху-вниз
  fly.prevOffset = fly.nextOffset;
  fly.nextOffset = window.pageYOffset;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const maxDown = clientHeight - fly.clientHeight;
  const maxScroll = scrollHeight - clientHeight;
  const percentScroll = Math.round((window.pageYOffset * 100) / maxScroll);
  const top = maxDown * percentScroll / 100;
  let opacity = 1;
  if (percentScroll > 10) {
    opacity = 1;
    fly.style.pointerEvents = 'auto';
  } else {
    opacity = percentScroll / 10;
    fly.style.pointerEvents = 'none';
  }
  fly.style.opacity = opacity;
  if (fly.prevOffset < fly.nextOffset) {
    // скролим вниз
    fly.style.transform = `translateY(${top}px) rotate(180deg)`;
    fly.classList.add('fly_down');
    fly.classList.remove('fly_up');
  } else {
    // скролим вверх
    fly.style.transform = `translateY(${top}px) rotate(0)`;
    fly.classList.add('fly_up');
    fly.classList.remove('fly_down');
  }
};

const flyInit = () => {
  // инициируем значения
  const flySize = 50;
  const fly = document.createElement('div');
  fly.classList.add('fly', 'fly_fixed', 'fly_vertical');
  fly.style.cssText = `
      display: block;
      width: ${flySize}px;
      height: ${flySize}px;
      position: fixed;
      top: 0;
      right: 0;
      background: url(./img/airplane.svg) center center / cover no-repeat;
      background-color: transparent;
      cursor: pointer;
      pointer-events: none;
      z-index: 50;
      opacity: 1;
      transform: rotate(180deg);
      transition: all 200ms ease;
  `;
  document.body.append(fly);
  // для направления смещения
  fly.nextOffset = 0;
  fly.prevOffset = fly.nextOffset;
  // click по самолету
  fly.addEventListener('click', (event) => {
    // не работает плавно в Google Chrome нужна настройка
    if (fly.classList.contains('fly_up')) {
      document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      console.log('в начало страницы');
    } else {
      document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
      console.log('до конца страницы');
    }
  });
  // возвращаем объект элемент fly
  return fly;
};


// todo with debounce
export const flyControl = () => {
  if (document.documentElement.clientWidth >= 368) {
    //  Если ширина экрана меньше 758px, то иконки этой на странице быть не должно
    // ширина экрана больше 758 px
    const fly = flyInit();
    // initial RAF
    requestAnimationFrame(() => {
      calcPositionFly(fly);
    });

    // let count = 0; // ? debug
    // scroll при прокрутке экрана RAF
    document.addEventListener('scroll', (event) => {
      requestAnimationFrame(() => {
        // console.log(count++);
        calcPositionFly(fly);
      });
    });
  } else {
    console.log('ширина браузера меньше 368 px', document.documentElement.clientWidth);
    alert('ширина браузера меньше 368 px', document.documentElement.clientWidth);
  }
};
