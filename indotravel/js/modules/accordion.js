// * accordion interactive module

export const accordionControl = (accordion) => {
  // проверка на null
  if (!accordion) {
    console.log('accordion null:', accordion);
    return;
  }
  // работаем дальше
  const travelItems = accordion.querySelectorAll('.travel__item');
  const travelBtns = accordion.querySelectorAll('.travel__item-title');
  const travelWrappers =
          accordion.querySelectorAll('.travel__item-text-wrapper');

  // initial скрываем все вкладки аккордиона
  travelItems.forEach((item, index) => {
    item.classList.remove('travel__item_active');
    item.title = travelBtns[index].textContent +
            ':\nКлик для дополнительной информации';
    travelWrappers[index].style.height = 0;
  });
  // todo можно сделать через делегирование
  // клик по кнопке заголовка вкладки
  travelBtns.forEach((btn, i) => {
    // клик по каждой btn
    btn.addEventListener('click', event => {
      const target = event.target;
      console.log('target: ', target);
      travelItems.forEach((item, j) => {
        // if (target === travelBtns[j]) {
        if (i === j) {
          if (travelItems[j].classList.contains('travel__item_active')) {
            travelItems[j].classList.remove('travel__item_active');
            travelWrappers[j].style.height = 0;
          } else {
            travelItems[j].classList.add('travel__item_active');
            travelWrappers[j].style.height =
                      travelWrappers[j].scrollHeight + 'px';
          }
        } else {
          travelItems[j].classList.remove('travel__item_active');
          travelWrappers[j].style.height = 0;
        }
      });
    });
  });

  travelWrappers.forEach((wrapper, index) => {
    wrapper.addEventListener('click', event => {
      // wrapper.parentElement.classList.remove('travel__item_active');
      travelItems[index].classList.remove('travel__item_active');
      // wrapper.style.height = 0;
      travelWrappers[index].style.height = 0;
    });
  });

  return;
};
