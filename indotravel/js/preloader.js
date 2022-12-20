/* eslint-disable max-len */
// eslint-disable-next-line strict
'use strict';

// todo with debounce
let opacity = 1;
let left = 0;

const flyOverlay = document.createElement('div');
flyOverlay.classList.add('overlay');
flyOverlay.style.cssText = `
  display: block;
  position: fixed;
  background-color: rgba(0,0,0,0.9);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: ${opacity};
  z-index: 999;
`;

const docEl = document.documentElement;
const flySize = 50;
const clientCenter = Math.ceil((docEl.clientHeight - flySize) / 2);

const fly = document.createElement('div');
fly.classList.add('fly', 'fly_fixed');
fly.style.cssText = `
    display: block;
    position: fixed;
    width: 50px;
    height: 50px;
    top: ${clientCenter}px;
    left: ${left}px;
    background: url(./img/airplane.svg) center center / cover no-repeat;
    background-color: transparent;
    z-index: 99;
    opacity: 1;
    transform: rotateZ(90deg);
`;

flyOverlay.append(fly);
document.body.append(flyOverlay);

const hideOverlay = () => {
  opacity -= 0.05;
  flyOverlay.style.opacity = opacity;
  console.log('opacity: ', opacity);
  if (opacity > 0) {
    requestAnimationFrame(hideOverlay);
  } else {
    console.log('done overlay');
    flyOverlay.remove();
  }
  return;
};

// todo need to do with progress %%
const stepFly = () => {
  const scrollWidth = document.documentElement.scrollWidth;
  const maxLeft = scrollWidth - fly.clientWidth;
  left += 20;
  console.log('left: ', left);
  fly.style.transform = `translateX(${left}px) rotateZ(90deg)`;
  if (left < maxLeft) {
    requestAnimationFrame(stepFly);
    if (left > (maxLeft - 150)) {
      requestAnimationFrame(hideOverlay);
    }
  } else {
    requestAnimationFrame(hideOverlay);
  }
  return;
};

requestAnimationFrame(stepFly);
