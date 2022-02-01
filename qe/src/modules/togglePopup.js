/**
 * По клику на кнопку “Заказать звонок” !! .callback-btn 2 кнопки
 * открывается модальное окно с классом // * .modal-callback
 * и подложка с классом // * .modal-overlay
 */
/**
 * В модальном окне при клике на крестик с классом // * .modal-close
 * или на подложку // * .modal-overlay
 * модальное окно и подложка должны скрываться
 * * модальное окно появляется и скрывается через анимацию animate.css 2020 !!
 */

const togglePopup = () => {
  // получаем все кнопки по которым вызываем модальное окно
  const popupBtns = document.querySelectorAll('.callback-btn'); // кнопки Заказать звонок
  const buttonServices = document.querySelector('.button-services'); // кнопка из faq
  const modalOverlay = document.querySelector('.modal-overlay'); // подложка под окно
  const modal = document.querySelector('.modal-callback'); // модальное окно

  const servicesSection = document.querySelector('#services'); // клики по блокам карусели Наши Услуги
  const servicesElements = servicesSection.querySelectorAll('.element');

  // отобразить модальное окно
  const showModal = () => {
    modalOverlay.style.display = 'block';
    modal.style.display = 'block';
    // анимация через animate.css 2020
    modal.classList.remove('animate__fadeOut');
    modal.classList.add('animate__animated', 'animate__fadeIn');
  };

  // скрыть модальное окно
  const closeModal = () => {
    // сделать анимацию animate.css
    modal.classList.add('animate__animated', 'animate__fadeOut');
    modal.classList.remove('animate__fadeIn');
    // можно сделать это через promise по совету animate.css
    setTimeout(() => {
      modal.style.display = 'none';
      modalOverlay.style.display = 'none';
    }, 500);
  };

  // * клпик по кнопкам Заказать звонок callback-btn Открывает окно
  popupBtns.forEach((popupBtn) => {
    popupBtn.addEventListener('click', (event) => showModal());
  });

  // * клик по кнопке ЗВОНИТЕ, МЫ ОБЯЗАТЕЛЬНО ВАМ ПОМОЖЕМ!
  buttonServices.addEventListener('click', (event) => showModal());

  //? * клик по элементу карусели из блока Наши услуги services-section тоже открывает окно
  servicesSection.querySelectorAll('.element').forEach((item) => {
    item.addEventListener('click', (event) => {
      showModal();
    });
  });

  // * клик по overlay Закрывает окно
  modalOverlay.addEventListener('click', (event) => {
    closeModal();
  });

  // * клик по кнопке Закрыть modal-close button [X] Закрывает окно
  modal.querySelector('.modal-close').addEventListener('click', (event) => {
    closeModal();
  });
};

export default togglePopup;
