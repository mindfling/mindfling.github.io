// * эффект аккордеон для блока САМЫЕ ЧАСТЫЕ ВОПРОСЫ

const accordeon = () => {
  const accordeonSection = document.querySelector('.accordeon-section'); // блок САМЫЕ ЧАСТЫЕ ВОПРОСЫ
  const accordeon = accordeonSection.querySelector('.accordeon'); // сам аккордеон
  const elements = accordeon.querySelectorAll('.element');  // элементы вкладки аккордеона

  elements.forEach((elem) => {
    const title = elem.querySelector('.title');
    const content = elem.querySelector('.element-content');
    content.classList.add('animate__animated', 'animate__fadeInDown', 'animate__faster');

    title.addEventListener('click', (event) => {
      const target = event.target.closest('.element');
      // перебраем все остальные вкладки аккордеона
      elements.forEach((item) => {
        if (item === target) {
          item.classList.toggle('active'); // открываем вкладку
        } else {
          item.classList.remove('active'); // закрываем вкладку
        }
      });
    }); // 'click'

  });
};


export default accordeon;
