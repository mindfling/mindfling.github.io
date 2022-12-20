/* eslint-disable max-len */
// * test fly vertical airplane move with vertical

// todo with debounce

export const flyControl = () => {
  const fly = document.createElement('div');

  // todo Если ширина экрана меньше 758px, то иконки этой на странице быть не должно
  if (document.documentElement.clientWidth >= 758) {
    // todo func
    // * ширина экрана больше 758 px
    fly.classList.add('fly', 'fly_fixed', 'fly_vertical');
    const flySize = 50;
    let top = 0;
    fly.style.cssText = `
      display: block;
      position: fixed;
      width: ${flySize}px;
      height: ${flySize}px;
      top: ${top};
      right: 0;
      z-index: 50;
      opacity: 1;
      background: url(./img/airplane.svg) center center / cover no-repeat;
      background-color: transparent;
      cursor: pointer;
      pointer-events: none;
      transform: rotateZ(180deg);
      transition: all 200ms ease;
  `;

    document.body.append(fly);
    let nextOffset = 0;
    let prevOffset = nextOffset;

    const calcPositionFly = () => {
      prevOffset = nextOffset;
      const pageOffset = window.pageYOffset;
      nextOffset = pageOffset;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const maxDown = clientHeight - fly.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      const percentScroll = Math.round((pageOffset * 100) / maxScroll);
      top = maxDown * percentScroll / 100;
      let opacity = 1;
      if (percentScroll > 10) {
        opacity = 1;
        fly.style.pointerEvents = 'auto';
      } else {
        opacity = percentScroll / 10;
        fly.style.pointerEvents = 'none';
      }
      fly.style.opacity = opacity;
      if (prevOffset < nextOffset) {
        fly.style.transform = `translateY(${top}px) rotate(180deg)`;
        fly.classList.add('fly_down');
        fly.classList.remove('fly_up');
        // console.log('скролим вниз');
      } else {
        fly.style.transform = `translateY(${top}px) rotate(0)`;
        fly.classList.add('fly_up');
        fly.classList.remove('fly_down');
        // console.log('скролим вверх');
      }
      return;
    };
    requestAnimationFrame(calcPositionFly);

    document.addEventListener('scroll', (event) => {
      requestAnimationFrame(calcPositionFly);
    });

    fly.addEventListener('click', (event) => {
      console.log('scroll to Up');
      // window.scrollTo(0, 0);
      // ??? не работает плавно в Google Chrome нужна настройка
      if (fly.classList.contains('fly_up')) {
        document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
        console.log('в начало страницы');
      } else {
        document.body.scrollIntoView({behavior: 'smooth', block: 'end'});
        console.log('до конца страницы');
      }
    });
  } else {
    console.log('ширина браузера меньше 768 px');
    console.log(document.documentElement.clientWidth);
  }
};
