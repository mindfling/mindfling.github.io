'use strict';

const toggleMobileMenu = () => {
  console.log('hello toggle');

  const mobMenuBtn = document.querySelector('.mob-menu-btn');
  console.log('mobMenuBtn: ', mobMenuBtn);
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');

  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  console.log('mobileMenuClose: ', mobileMenuClose);
  mobileMenuClose.addEventListener('click', (event) => {
    console.log('close mobile menu', event.target);
    mobileMenu.classList.remove('open');
  });
  overlay.addEventListener('click', (event) => {
    console.log('close mobile menu by overlay', event.target);
    mobileMenu.classList.remove('open');
  });

  //todo animate.css

  mobMenuBtn.addEventListener('click', (event) => {
    //deligate
    const target = event.target;
    // console.log('target', event.target);

    const closest = target.closest('.mob-menu-btn');
    // console.log('closest: ', closest);

    mobileMenu.classList.add('open'); // ! добавляем класс открывающий моб меню
    // mobileMenu.style.right = 0; // * show
    // mobileMenu.classList.add('animate__lightSpeedInRight'); //? todo try to use Animate.css
  });
};

export default toggleMobileMenu;
