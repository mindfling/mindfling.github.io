/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_topSlider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/topSlider.js */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliderCarousel */ \"./src/modules/sliderCarousel.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_handleMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/handleMenu */ \"./src/modules/handleMenu.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\r\n/** Quantum electrician Diploma project \r\n * https://github.com/mindfling/GLO_JS17_Quantum_Electrician\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n(0,_modules_topSlider_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n(0,_modules_handleMenu__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_5__.default)();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__.default)();\r\n\r\n\r\nconst carousel = new _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_2__.default({\r\n    main: '.services-elements',\r\n    wrap: '.services-carousel',\r\n    next: '.arrow-right',\r\n    prev: '.arrow-left',\r\n    slidesToShow: 3\r\n});\r\ncarousel.init();\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// * эффект аккордеон для блока САМЫЕ ЧАСТЫЕ ВОПРОСЫ\r\n\r\nconst accordeon = () => {\r\n  const accordeonSection = document.querySelector('.accordeon-section'); // блок САМЫЕ ЧАСТЫЕ ВОПРОСЫ\r\n  const accordeon = accordeonSection.querySelector('.accordeon'); // сам аккордеон\r\n  const elements = accordeon.querySelectorAll('.element');  // элементы вкладки аккордеона\r\n\r\n  elements.forEach((elem) => {\r\n    const title = elem.querySelector('.title');\r\n    const content = elem.querySelector('.element-content');\r\n    content.classList.add('animate__animated', 'animate__fadeInDown', 'animate__faster');\r\n\r\n    title.addEventListener('click', (event) => {\r\n      const target = event.target.closest('.element');\r\n      // перебраем все остальные вкладки аккордеона\r\n      elements.forEach((item) => {\r\n        if (item === target) {\r\n          item.classList.toggle('active'); // открываем вкладку\r\n        } else {\r\n          item.classList.remove('active'); // закрываем вкладку\r\n        }\r\n      });\r\n    }); // 'click'\r\n\r\n  });\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/handleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/handleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handleMenu = () => {\r\n  const topMenu = document.querySelector('.top-menu');\r\n  const headerWrapperHeight = document.querySelector('.header-wrapper').getBoundingClientRect().height; // высота смещения хэдера\r\n\r\n  const targets = topMenu.querySelectorAll('a');\r\n  targets.forEach((item) => {\r\n    item.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n\r\n      const id = event.target.getAttribute('href'); // находим значение в ссылке\r\n      const blockPosition = document.querySelector(id).getBoundingClientRect().top;\r\n\r\n      // скролл учитывая высоту смещения хедера\r\n      window.scrollBy({\r\n        top: blockPosition - headerWrapperHeight,\r\n        behavior: 'smooth',\r\n      });\r\n    });\r\n\r\n  });\r\n}; \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleMenu);\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/modules/handleMenu.js?");

/***/ }),

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollUp = () => {\r\n  const servicesSection = document.querySelector('#services');\r\n  // const faqSection = document.querySelector('#faq');\r\n  // const contactsSection = document.querySelector('#contacts');\r\n  const mainWrapper = document.querySelector('.main-wrapper');\r\n  const headerWrapper = document.querySelector('.header-wrapper'); //блок хедера\r\n  const blockHeaderHight = headerWrapper.getBoundingClientRect().height;\r\n  const upButton = document.querySelector('.up');\r\n  // скрываем кнопку вверх в самом начале :)\r\n  upButton.classList.add('animate__animated');\r\n  upButton.classList.add('animate__bounceOutDown');\r\n\r\n  upButton.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    // плавная прокрутка до самого верхнего блока mainWrapper\r\n    mainWrapper.scrollIntoView({behavior: 'smooth', block: 'start'});\r\n  });\r\n\r\n  // отслеживаем событие прокрутки scroll до нужного блока чтобы отбразить шеврон up на нужном уровне + 1 еще для точности\r\n  document.addEventListener('scroll', (event) => {\r\n\r\n    if (servicesSection.getBoundingClientRect().top < blockHeaderHight + 1) {\r\n      // проскрорили ниже блока НАШИ УСЛУГИ\r\n\r\n      // * showUpButton ВЫПРЫГИВАЕТ С НИЗУ ВВЕРХ\r\n      // upButton.classList.add('animate__animated');\r\n      upButton.classList.remove('animate__bounceOutDown');\r\n      upButton.classList.add('animate__bounceInUp'); // замена display block\r\n    } else {\r\n      // * showUpButton СКРЫВАЕМ ВНИЗ\r\n      // upButton.classList.add('animate__animated');\r\n      upButton.classList.add('animate__bounceOutDown'); // замена display none\r\n      upButton.classList.remove('animate__bounceInUp');\r\n    }\r\n  });\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/modules/scrollUp.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * В модальном окне имеется форма отправки.\r\n * Форма должна отправляться посредством //* AJAX (без перезагрузки страницы)\r\n * и захватывать все введенные данные (в Dev Tools, во вкладке Network, в файле server.php\r\n * данные должны отправляться в JSON-формате).\r\n * Также необходимо оповестить пользователя о состоянии отправки\r\n * * идет отправка\r\n * * отправлено\r\n * * ошибка\r\n * В поле с телефоном можно вводить //* только цифры и + (знак плюс).\r\n * В поле “Ваше имя” вводится только // * кириллица.\r\n */\r\n\r\n// обрабатываем нашу форму в модальном окне\r\n\r\nconst sendForm = () => {\r\n  const loadMessage = 'Идет отправка ...';\r\n  const successMessage = 'Спасибо! Ваша заявка отправлена!';\r\n  const errorMessage = 'Ошибка! Что-то пошло не так :(';\r\n\r\n  const modalCallback = document.querySelector('#callback');\r\n  const form = modalCallback.querySelector('form');\r\n  const inputFio = form.querySelector('input[name=\"fio\"]'); // поле ввода Ваше Имя\r\n  const inputTel = form.querySelector('input[name=\"tel\"]'); // поле ввода Телефон *\r\n\r\n  // статус ответа пользователю\r\n  const statusMessage = document.createElement('div');\r\n  statusMessage.textContent = loadMessage;\r\n  statusMessage.style.cssText = `font-size:1.5rem; font-weight:bold; color:#4e4e4e; text-align:center; padding: 5px 0;`;\r\n\r\n  // валидация формы\r\n  const formValidate = () => {\r\n    // ввод символов в поле // *Ваше имя\r\n    inputFio.addEventListener('input', (event) => {\r\n      // <> валидация имени\r\n      event.target.value = event.target.value.replace(/((?<=^)\\s+)|((?<=\\s)\\s+)|([^а-яА-ЯёЁ\\s])/ig, '');\r\n    });\r\n    // ввод цифр в поле // *Телефон\r\n    inputTel.addEventListener('input', (event) => {\r\n      // <> валидация номера телефона\r\n      event.target.value = event.target.value.replace(/([^\\d\\+])|((?<=[\\d\\D])\\++)|((?<=[\\d\\D]{12,})[\\d\\D])/g, '');\r\n    });\r\n  };\r\n  formValidate();\r\n\r\n  // функция очистки данных полей формы\r\n  const clearForm = (form) => {\r\n    // todo через время 1с очистка полей формы\r\n    setTimeout(() => {\r\n      form.querySelectorAll('input[type=\"text\"]').forEach((field) => {\r\n        field.value = ''; // очистка поля \r\n        // field.setAttribute('disabled', 'true'); // деактивируем поле\r\n      });\r\n    }, 1000);\r\n    // todo через время удаление сообщения о статусе\r\n    setTimeout(() => {\r\n      statusMessage.remove();\r\n    }, 7000);\r\n    // todo закрытие формы через время\r\n    // setTimeout(() => {\r\n    //   const modalOverlay = document.querySelector('.modal-overlay'); // подложка под окно\r\n    //   const modal = document.querySelector('.modal-callback'); // модальное окно\r\n    //   modal.style.display = 'none';\r\n    //   modalOverlay.style.display = 'none';\r\n    //   // todo сделать анимацию animate.css\r\n    //   modal.classList.remove('fadeIn');\r\n    //   modal.classList.add('animated', 'fadeOut');\r\n\r\n    //   // field.setAttribute('disabled', 'false');\r\n    //   // field.value = '';\r\n    // }, 9000);\r\n  };\r\n\r\n  // функция формирования запроса на сервер\r\n  const postData = (body) =>\r\n    fetch('server.php', {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(body),\r\n    }); // возвращает fetch запрос\r\n\r\n  // * событие submit на форму\r\n  form.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n\r\n    // todo место для плейсхолдера\r\n    form.appendChild(statusMessage); // добавляем сообщение на форму\r\n    statusMessage.textContent = loadMessage;\r\n\r\n    // собираем данные формы\r\n    const formData = new FormData(form);\r\n    let body = {};\r\n    // заполняем тело запроса данными из формы\r\n    formData.forEach((item, key) => {\r\n      body[key] = item;\r\n    });\r\n\r\n    // запрос // возвращает fetch\r\n    postData(body)\r\n      .then((response) => {\r\n        // отбрасываем ошибку 200\r\n        if (response.status !== 200) {\r\n          throw new Error('Server response not 200 !!!');\r\n        }\r\n        // тогда дальше без ошибок\r\n        statusMessage.textContent = successMessage;\r\n        console.log('Server success');\r\n      })\r\n      .catch((error) => {\r\n        statusMessage.textContent = errorMessage;\r\n        console.error('Server error', error);\r\n      });\r\n\r\n    //очистка полей формы\r\n    clearForm(form);\r\n  }); //submit\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/sliderCarousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Carousel)\n/* harmony export */ });\n// * класс слайдера Карусели\r\n\r\nclass Carousel {\r\n  // настройки Карусельки передаем аргументами в конмтруктор\r\n  \r\n  constructor({\r\n    main, // селектор блока всего слайдера\r\n    wrap, // селектор обертка карусельки\r\n    next, // селектор кнопка следующий слайд\r\n    prev, // селектор кнопка предыдущий слайд\r\n    position = 0, // текущая позиция слайда\r\n    slidesToShow = 3, // слайдов на один показ\r\n    infinity = true, // будет ли каруселька крутиться вечно\r\n    animate = false, // есть ли автоматическая анимация // \r\n\r\n  }) {\r\n    this.main = document.querySelector(main);\r\n    this.wrap = document.querySelector(wrap);\r\n    this.next = document.querySelector(next);\r\n    this.prev = document.querySelector(prev);\r\n    this.slides = document.querySelector(wrap).children;\r\n    this.slidesToShow = slidesToShow; //количество слайдов за один показ\r\n    this.options = {\r\n      // переделать опции\r\n      position, // текущая позиция слайдов\r\n      infinity: infinity,\r\n      widthSlide: Math.floor(100 / this.slidesToShow), // в %\r\n    };\r\n  }\r\n\r\n  init() {\r\n    this.addGloClass();\r\n    this.addStyle();\r\n\r\n    if (this.prev && this.next) {\r\n      this.controlSlider();\r\n    } else {\r\n      this.addArrow();\r\n      this.controlSlider();\r\n    }\r\n  }\r\n\r\n  // * добавляет наши glo- классы к элементам слайдера\r\n  addGloClass() {\r\n    // добавляем дополнительные свои стили от GLO\r\n    this.main.classList.add('glo-slider');\r\n    this.wrap.classList.add('glo-slider__wrap');\r\n    for (const item of this.slides) {\r\n      item.classList.add('glo-slider__item');\r\n    }\r\n  }\r\n\r\n  // * стилизуем наш слайд и кнопки\r\n  addStyle() {\r\n    const style = document.createElement('style');\r\n    style.id = 'sliderCarousel-style';\r\n    style.textContent = `\r\n.glo-slider {\r\n    overflow: hidden !important;\r\n}\r\n.glo-slider__wrap {\r\n    display: flex !important;\r\n    justify-content: space-between !important;\r\n    align-items: center !important;\r\n    transition: transform 0.5s !important;\r\n    will-change: transition !important;\r\n}\r\n.glo-slider__item {\r\n    flex: 0 0 ${this.options.widthSlide}% !important;\r\n    margin: auto 0 !important;\r\n}\r\n.glo-slider__prev,\r\n.glo-slider__next {\r\n    margin: 0 12px;\r\n    border: 12px solid transparent;\r\n    background: transparent;\r\n}\r\n.glo-slider__next {\r\n    border-left-color: #19b5fe;\r\n}\r\n.glo-slider__prev {\r\n    border-right-color: #19b5fe;\r\n}\r\n\r\n.glo-slider__next:hover,\r\n.glo-slider__prev:hover,\r\n.glo-slider__next:focus,\r\n.glo-slider__prev:focus {\r\n    background: transparent;\r\n    outline: transparent;\r\n}\r\n`;\r\n    document.head.appendChild(style); // добавить блок слидей в head html страницы\r\n  }\r\n\r\n\r\n  controlSlider() {\r\n    //чтобы не потерять контекст нужен bind\r\n    this.prev.addEventListener('click', this.prevSlider.bind(this));\r\n    this.next.addEventListener('click', this.nextSlider.bind(this));\r\n  }\r\n\r\n  prevSlider() {\r\n    // перематываем на предыдущий слайд\r\n    if (this.options.infinity || this.options.position > 0) {\r\n      --this.options.position;\r\n      if (this.options.position < 0) {\r\n        this.options.position = this.slides.length - this.slidesToShow;\r\n      }\r\n      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;\r\n    }\r\n  }\r\n\r\n  nextSlider() {\r\n    // перематываем на следующий слайд\r\n    if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {\r\n      ++this.options.position;\r\n      if (this.options.position > this.slides.length - this.slidesToShow) {\r\n        this.options.position = 0;\r\n      }\r\n      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/modules/sliderCarousel.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * По клику на кнопку “Заказать звонок” !! .callback-btn 2 кнопки\r\n * открывается модальное окно с классом // * .modal-callback\r\n * и подложка с классом // * .modal-overlay\r\n */\r\n/**\r\n * В модальном окне при клике на крестик с классом // * .modal-close\r\n * или на подложку // * .modal-overlay\r\n * модальное окно и подложка должны скрываться\r\n * * модальное окно появляется и скрывается через анимацию animate.css 2020 !!\r\n */\r\n\r\nconst togglePopup = () => {\r\n  // получаем все кнопки по которым вызываем модальное окно\r\n  const popupBtns = document.querySelectorAll('.callback-btn'); // кнопки Заказать звонок\r\n  const buttonServices = document.querySelector('.button-services'); // кнопка из faq\r\n  const modalOverlay = document.querySelector('.modal-overlay'); // подложка под окно\r\n  const modal = document.querySelector('.modal-callback'); // модальное окно\r\n\r\n  const servicesSection = document.querySelector('#services'); // клики по блокам карусели Наши Услуги\r\n  const servicesElements = servicesSection.querySelectorAll('.element');\r\n\r\n  // отобразить модальное окно\r\n  const showModal = () => {\r\n    modalOverlay.style.display = 'block';\r\n    modal.style.display = 'block';\r\n    // анимация через animate.css 2020\r\n    modal.classList.remove('animate__fadeOut');\r\n    modal.classList.add('animate__animated', 'animate__fadeIn');\r\n  };\r\n\r\n  // скрыть модальное окно\r\n  const closeModal = () => {\r\n    // сделать анимацию animate.css\r\n    modal.classList.add('animate__animated', 'animate__fadeOut');\r\n    modal.classList.remove('animate__fadeIn');\r\n    // можно сделать это через promise по совету animate.css\r\n    setTimeout(() => {\r\n      modal.style.display = 'none';\r\n      modalOverlay.style.display = 'none';\r\n    }, 500);\r\n  };\r\n\r\n  // * клпик по кнопкам Заказать звонок callback-btn Открывает окно\r\n  popupBtns.forEach((popupBtn) => {\r\n    popupBtn.addEventListener('click', (event) => showModal());\r\n  });\r\n\r\n  // * клик по кнопке ЗВОНИТЕ, МЫ ОБЯЗАТЕЛЬНО ВАМ ПОМОЖЕМ!\r\n  buttonServices.addEventListener('click', (event) => showModal());\r\n\r\n  //? * клик по элементу карусели из блока Наши услуги services-section тоже открывает окно\r\n  servicesSection.querySelectorAll('.element').forEach((item) => {\r\n    item.addEventListener('click', (event) => {\r\n      showModal();\r\n    });\r\n  });\r\n\r\n  // * клик по overlay Закрывает окно\r\n  modalOverlay.addEventListener('click', (event) => {\r\n    closeModal();\r\n  });\r\n\r\n  // * клик по кнопке Закрыть modal-close button [X] Закрывает окно\r\n  modal.querySelector('.modal-close').addEventListener('click', (event) => {\r\n    closeModal();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Главный слайдер в хэдере Реализовать слайдер следующим образом:\r\n * - три слайда, у каждого свой текст и своё бэкграунд-изображение .active opacity\r\n * - Слайды с автопрокруткой раз в три (3) секунды autoplay( )\r\n * - Дотсы // * .dot\r\n *  (точки переключения) реализовать по желанию.\r\n * Блок слайдера находится в блоке с классом // *  .top-slider\r\n */\r\n\r\nconst topSlider = () => {\r\n  const slider = document.querySelector('.top-slider');\r\n  const slides = slider.querySelectorAll('.item');\r\n  const slidesLength = slides.length; // количество слайдов = 3\r\n  const timeDelay = 3000; // смена слайдов каждые 3 секунды\r\n  \r\n  console.log('slider: ', slider);\r\n  console.log('slides: ', slides);\r\n  let currentSlide = 0;\r\n  let timerInterval;\r\n\r\n  const autoPlaySlide = () => {\r\n    // скрываем все кроме текущего\r\n\r\n    slides.forEach((slide, index) => {\r\n      if (index == currentSlide) {\r\n        slide.classList.add('item-active');\r\n      } else {\r\n        slide.classList.remove('item-active');\r\n      }\r\n    });\r\n\r\n    //крутим текущий слайд\r\n    if (currentSlide < 2) {\r\n      currentSlide++;\r\n    } else {\r\n      currentSlide = 0;\r\n    }\r\n  };\r\n\r\n  // смена слайдов\r\n  const startSlide = () => {\r\n    autoPlaySlide();\r\n\r\n    timerInterval = setInterval(() => {\r\n      autoPlaySlide();\r\n    }, timeDelay);\r\n  };\r\n  startSlide();\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/modules/topSlider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;