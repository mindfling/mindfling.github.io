/* eslint-disable max-len */
// eslint-disable-next-line strict
'use strict';

// const clientCenter = Math.ceil(document.documentElement.clientHeight / 2);

const fly = document.createElement('div');
fly.classList.add('fly', 'fly_fixed');
fly.style.cssText = `
  display: block;
  position: fixed;
  top: 0;
  right: 0px;
  width: 50px;
  height: 50px;
  background: url(./img/airplane.svg) center center / cover no-repeat;
  background-color: transparent;
  z-index: 99;
  opacity: 1;
  transform: rotateZ(180deg);
`;

document.body.append(fly);

// * fly simple scroll without requestAnimationFrame

let nextOffset = 0;
let prevOffset = nextOffset;
const scrollHandle = (event) => {
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  prevOffset = nextOffset;
  const pageOffset = window.pageYOffset;
  nextOffset = pageOffset;
  const percentYOffset = Math.round((pageOffset / (scrollHeight - clientHeight)) * 100);
  if (prevOffset < nextOffset) {
    console.log('скролим вниз');
    fly.style.transform = `translateY(${((clientHeight - fly.clientHeight) * percentYOffset / 100)}px) rotate(180deg)`;
  } else {
    console.log('скролим вверх');
    fly.style.transform = `translateY(${((clientHeight - fly.clientHeight) * percentYOffset / 100)}px) rotate(0)`;
  }
  return;
};

document.addEventListener('scroll', scrollHandle);

