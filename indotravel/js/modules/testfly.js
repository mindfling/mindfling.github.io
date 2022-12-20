/* eslint-disable max-len */
// * test fly horizontal airplane move with vertical site scroll by Maks


const fly = document.createElement('div');
fly.classList.add('fly', 'fly_fixed', 'fly_horizontal');
fly.style.cssText = `
  display: block;
  position: fixed;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0px;
  z-index: 55;
  opacity: 1;
  background: url(./img/airplane.svg) center center / cover no-repeat;
  background-color: transparent;
  transform: rotateZ(90deg);
  pointer-events: none;
`;

document.body.append(fly);

const calcPositionFly = () => {
  const scrollWidth = document.documentElement.scrollWidth;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const maxLeft = scrollWidth - fly.clientWidth;
  const maxScroll = scrollHeight - clientHeight;
  const percentScroll = (window.pageYOffset * 100) / maxScroll;
  const left = maxLeft * (percentScroll / 100);
  fly.style.transform = 'translateX(' + left + 'px) rotate(90deg)';
  return;
};

window.addEventListener('scroll', (event) => {
  requestAnimationFrame(calcPositionFly);
});
