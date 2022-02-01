const scrollUp = () => {
  const servicesSection = document.querySelector('#services');
  // const faqSection = document.querySelector('#faq');
  // const contactsSection = document.querySelector('#contacts');
  const mainWrapper = document.querySelector('.main-wrapper');
  const headerWrapper = document.querySelector('.header-wrapper'); //блок хедера
  const blockHeaderHight = headerWrapper.getBoundingClientRect().height;
  const upButton = document.querySelector('.up');
  // скрываем кнопку вверх в самом начале :)
  upButton.classList.add('animate__animated');
  upButton.classList.add('animate__bounceOutDown');

  upButton.addEventListener('click', (event) => {
    event.preventDefault();
    // плавная прокрутка до самого верхнего блока mainWrapper
    mainWrapper.scrollIntoView({behavior: 'smooth', block: 'start'});
  });

  // отслеживаем событие прокрутки scroll до нужного блока чтобы отбразить шеврон up на нужном уровне + 1 еще для точности
  document.addEventListener('scroll', (event) => {

    if (servicesSection.getBoundingClientRect().top < blockHeaderHight + 1) {
      // проскрорили ниже блока НАШИ УСЛУГИ

      // * showUpButton ВЫПРЫГИВАЕТ С НИЗУ ВВЕРХ
      // upButton.classList.add('animate__animated');
      upButton.classList.remove('animate__bounceOutDown');
      upButton.classList.add('animate__bounceInUp'); // замена display block
    } else {
      // * showUpButton СКРЫВАЕМ ВНИЗ
      // upButton.classList.add('animate__animated');
      upButton.classList.add('animate__bounceOutDown'); // замена display none
      upButton.classList.remove('animate__bounceInUp');
    }
  });
};


export default scrollUp;
