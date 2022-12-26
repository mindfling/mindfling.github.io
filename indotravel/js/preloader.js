/* eslint-disable max-len */
// eslint-disable-next-line strict
'use strict';

// * preloader overlay *
const docEl = document.documentElement;
const flySize = 80;

const flyOverlay = document.createElement('div');
flyOverlay.classList.add('overlay');
flyOverlay.style.cssText = `
  display: block;
  position: fixed;
  background-color: rgba(0,0,0,0.96);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  z-index: 999;
`;
// * preloader fly *
const fly = document.createElement('div');
fly.classList.add('fly', 'fly_fixed');
fly.style.cssText = `
  display: block;
  position: fixed;
  width: ${flySize}px;
  height: ${flySize}px;
  top: calc(50% - ${flySize / 2}px);
  left: 0;
  background: url(./img/airplane.svg) center center / cover no-repeat;
  background-color: transparent;
  z-index: 99;
  opacity: 0;
  transition: all 100ms ease;
`;

flyOverlay.append(fly);
document.body.append(flyOverlay);

const durationOpacity = 200; // 300ms
let startOpacity = NaN;
let opacityProgress = 0;
let currentOpacity = 1;
const hideOverlay = (timestamp) => {
  startOpacity = startOpacity || timestamp;
  opacityProgress = (timestamp - startOpacity) / durationOpacity;
  currentOpacity = 1 - opacityProgress;
  flyOverlay.style.opacity = currentOpacity;
  if (currentOpacity > 0) {
    requestAnimationFrame(hideOverlay);
  } else {
    startOpacity = NaN;
    flyOverlay.remove();
  }
  return;
};

const durationFly = 1000; // 1s
let percentProgress = 0; // * 0% -> 100%
let startTime = NaN;
// do with progress %%
let shift = 0;
// let animationCount = 0;
fly.style.rotate = `90deg`;
// todo with debounce
const stepFly = (timestemp) => {
  if (!startTime) {
    startTime = timestemp;
  }
  // console.log(animationCount++);
  percentProgress = (timestemp - startTime) / durationFly;
  const scrollWidth = docEl.scrollWidth;
  const maxShift = scrollWidth - fly.clientWidth;
  shift = maxShift * percentProgress;
  fly.style.translate = `${shift}px 0`;
  if (percentProgress < 1) {
    if (percentProgress < 0.2) {
      // самолет появляется
      fly.style.opacity = (5 * percentProgress);
    } else if (percentProgress > 0.8) {
      // самолет исчезает
      fly.style.opacity = ((1 - percentProgress) * 5);
    } else {
      fly.style.opacity = 1;
    }
    requestAnimationFrame(stepFly);
  } else {
    // самолет пролетел удаляем оверлей
    startTime = NaN;
    requestAnimationFrame(hideOverlay);
  }
  return;
};

requestAnimationFrame(stepFly);
