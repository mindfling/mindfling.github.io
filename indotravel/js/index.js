// * import all modules to index

import {accordionControl} from './modules/accordion.js';
import {menuControl} from './modules/menu.js';
import {timerControl} from './modules/timer.js';
import {flyControl} from './modules/fly.js';

const heroBanner = document.querySelector('.hero__text');
const heroTimer = document.querySelector('.hero__timer');
const accordion = document.querySelector('.travel__accordion');

timerControl(heroTimer, heroBanner);

menuControl();
accordionControl(accordion);

flyControl();
