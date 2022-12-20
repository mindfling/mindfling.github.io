/* eslint-disable require-jsdoc */
// * menu control menuBtn

export const menuControl = () => {
  const menuBtn = document.querySelector('.header__menu-button');
  const headerMenu = document.querySelector('.header__menu');

  console.log('menuBtn: ', menuBtn);
  console.log('headerMenu: ', headerMenu);

  console.log('headerMenu.style.transform: ', headerMenu.style.transform);
  console.log(headerMenu.clientHeight);

  // headerMenu.style.transform = `translateX(${-headerMenu.clientHeight})px`;
  headerMenu.style.transform = `translateY(${-headerMenu.clientHeight - 90}px)`;
  // headerMenu.style.transform = `translateY(-54-34-339px)`;

  // навешиваем нажатие на клавишу Escape закрыть меню
  const escapeHandle = (event) => {
    const key = event.key;
    if (key === 'Escape') {
      console.log('Escaped');
      headerMenu.classList.remove('header__menu_active');
      document.removeEventListener('keydown', escapeHandle);
      document.removeEventListener('click', clickHandle);
      return;
    }
    console.log(key);
    return;
  };

  // отдельно навешиваем клик по кнопке меню
  const menuBtnHandle = event => {
    const target = event.target;
    let down = -500;

    const stepAnimation = () => {
      // todo timestamp and progress %%
      down += 25;
      console.log('down: ', down);
      headerMenu.style.transform = `translateY(${down}px)`;
      if (down < 0) {
        requestAnimationFrame(stepAnimation);
      } else {
        console.log('raf menu done');
        return;
      }
    };

    if (target === menuBtn) {
      if (headerMenu.classList.contains('header__menu_active')) {
        console.log('menuBtnHandle close');
        // * simple close by remove active class
        headerMenu.classList.remove('header__menu_active');
        headerMenu.style.transform =
            `translateY(${-headerMenu.clientHeight - 90}px)`;
        document.removeEventListener('keydown', escapeHandle);
        document.removeEventListener('click', clickHandle);

        return;
      } else {
        console.log('menuBtnHandle open');
        headerMenu.classList.add('header__menu_active');

        // * make raf animate open
        requestAnimationFrame(stepAnimation);

        document.addEventListener('keydown', escapeHandle);
        document.addEventListener('click', clickHandle);
        return;
      }
    }
    return;
  };

  // чтобы предусмотреть возможные варианты открыть и закрыть меню
  function clickHandle(event) {
    const target = event.target;
    event.preventDefault();

    if (target === menuBtn) {
      console.log('menu btn clickHandle'); //
      return;
    }

    if (target.classList.contains('header__link')) {
      // * плавный переход по ссылкам
      // const target = event.target;
      const href = target.href;
      const id = '#' + href.split('#')[1];
      const block = document.querySelector(id);
      // поиск элемента плавный переход по ссылке к элементу блоку
      block.scrollIntoView({behavior: 'smooth', block: 'start'});
      console.log('smooth scroll to block: ', block);
      // закрываем меню
      headerMenu.classList.remove('header__menu_active');
      console.log('link menu'); //
      headerMenu.style.transform =
          `translateY(${-headerMenu.clientHeight - 90}px)`;
      document.removeEventListener('keydown', escapeHandle);
      document.removeEventListener('click', clickHandle);
      return;
    }

    if (target === headerMenu ||
          target.classList.contains('header__item')) {
      console.log('header menu or menu__item');
      return;
    }

    headerMenu.classList.remove('header__menu_active');
    console.log('other', target);
    headerMenu.style.transform =
        `translateY(${-headerMenu.clientHeight - 90}px)`;
    document.removeEventListener('keydown', escapeHandle);
    document.removeEventListener('click', clickHandle);
    return;
  }

  document.addEventListener('click', menuBtnHandle);

  /*
  document.addEventListener('click', event => {
    const target = event.target;
    if (target === menuBtn) {
      headerMenu.classList.add('header__menu_active');
      console.log('menu btn'); //
      document.addEventListener('keydown', escapeHandle);
      return;
    }
    if (target.classList.contains('header__link')) {
      headerMenu.classList.remove('header__menu_active');
      console.log('link menu'); //
      document.removeEventListener('keydown', escapeHandle);
      return;
    }
    if (target === headerMenu) {
      console.log('header menu');
      return;
    }
    headerMenu.classList.remove('header__menu_active');
    console.log('other');
    document.removeEventListener('keydown', escapeHandle);
    return;
  });
  */

  /*
  document.addEventListener('keydown', event => {
    const key = event.key;
    if (key === 'Escape') {
      console.log('Escaped');
      headerMenu.classList.remove('header__menu_active');
    }
  });
  */

  // document.addEventListener('click', clickHandle);
  return;
};
