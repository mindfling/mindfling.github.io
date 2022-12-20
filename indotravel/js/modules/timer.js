/* eslint-disable max-len */
// module for using deadline timer in hero section
// * this timer is for IndoTravel

import {plural, zeroBeforeNumber} from './utiles.js';

// * функция контроля обратного отсчета таймера акции
export const timerControl = (timer, banner) => {
  // получаем элементы таймера
  const timerItemDays = timer.querySelector('.timer__item_days');
  const timerCountDays = timerItemDays.querySelector('.timer__count_days');
  const timerUnitsDays = timerItemDays.querySelector('.timer__units_days');

  const timerCountHours = timer.querySelector('.timer__count_hours');
  const timerUnitsHours = timer.querySelector('.timer__units_hours');

  const timerCountMinutes = timer.querySelector('.timer__count_minutes');
  const timerUnitsMinutes = timer.querySelector('.timer__units_minutes');

  const timerItemSeconds = timer.querySelector('.timer__item_seconds');
  const timerCountSeconds = timerItemSeconds.querySelector('.timer__count_seconds');
  const timerUnitsSeconds = timerItemSeconds.querySelector('.timer__units_seconds');

  const timerRemove = (elem) => {
    elem.style.display = 'none';
  };

  const bannerRemove = (elem) => {
    elem.style.opacity = 0;
    elem.innerHTML = '&nbsp;<br>&nbsp;';
  };

  // ? parse ? '15/1/2022 21:55' -> '2020-1-15 21:55'
  const deadline = timer.dataset.deadline.split(' ').map(item => item.split('/').reverse().join('-')).join(' ');
  const timeDeadline = new Date(Date.parse(deadline));
  console.log('deadline: ', deadline);
  console.log('timeDeadline: ', timeDeadline);

  const timerHandle = (timeDeadline) => {
    const timeNow = new Date();
    const delta = timeDeadline.getTime() - timeNow.getTime();
    if (delta > 0) {
      // console.log('До дедлайна осталось ', delta, 'ms');

      const timeLeft = parseInt((timeDeadline.getTime() - timeNow.getTime()) / 1000); // all seconds
      const secondsLeft = parseInt(timeLeft % 60);
      const minutesLeft = parseInt(timeLeft / 60 % 60);
      const hoursLeft = parseInt(timeLeft / 60 / 60 % 24);
      const hoursLeftAll = timeLeft / 60 / 60; // float all hours
      const daysLeft = parseInt(timeLeft / 60 / 60 / 24);

      if (hoursLeftAll >= 24) {
        // console.log('больше суток в запасе', hoursLeftAll);
        timerItemDays.style.display = 'flex';
        timerCountDays.textContent = zeroBeforeNumber(daysLeft);
        timerUnitsDays.textContent = plural(daysLeft, ['день', 'дня', 'дней']);
        timerItemSeconds.style.display = 'none'; // скрываем секунды
      } else {
        // console.log('меньше суток до', deadline);
        timerItemSeconds.style.display = 'flex';
        timerCountSeconds.textContent = zeroBeforeNumber(secondsLeft);
        timerUnitsSeconds.textContent = plural(secondsLeft, ['секунда', 'секунды', 'секунд']);
        timerItemDays.style.display = 'none'; // скрываем дни
      }

      timerCountMinutes.textContent = zeroBeforeNumber(minutesLeft);
      timerUnitsMinutes.textContent = plural(minutesLeft, ['минута', 'минуты', 'минут']);

      timerCountHours.textContent = zeroBeforeNumber(hoursLeft);
      timerUnitsHours.textContent = plural(hoursLeft, ['час', 'часа', 'часов']);

      // запускаем функцию с разными интервалами чтобы лишний раз не наглужать
      if (hoursLeftAll < 25) {
        // console.log('сутки');
        setTimeout(timerHandle, 1000, timeDeadline);
      } else if (hoursLeftAll < 48) {
        // console.log('около суток');
        setTimeout(timerHandle, 5000, timeDeadline);
      } else {
        // console.log('больше суток');
        setTimeout(timerHandle, 10000, timeDeadline);
      }
      return;
    } else {
      console.log('Время истекло, ', deadline + ',', timeDeadline);
      timerRemove(timer);
      bannerRemove(banner);
      return;
    }
  };

  // * 1й раз запускаем timeout = 0
  setTimeout(() => {
    timerHandle(timeDeadline);
  }, 0);
};
