const handleMenu = () => {
  const topMenu = document.querySelector('.top-menu');
  const headerWrapperHeight = document.querySelector('.header-wrapper').getBoundingClientRect().height; // высота смещения хэдера

  const targets = topMenu.querySelectorAll('a');
  targets.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      const id = event.target.getAttribute('href'); // находим значение в ссылке
      const blockPosition = document.querySelector(id).getBoundingClientRect().top;

      // скролл учитывая высоту смещения хедера
      window.scrollBy({
        top: blockPosition - headerWrapperHeight,
        behavior: 'smooth',
      });
    });

  });
}; 

export default handleMenu;
