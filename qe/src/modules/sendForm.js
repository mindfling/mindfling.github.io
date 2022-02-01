/**
 * В модальном окне имеется форма отправки.
 * Форма должна отправляться посредством //* AJAX (без перезагрузки страницы)
 * и захватывать все введенные данные (в Dev Tools, во вкладке Network, в файле server.php
 * данные должны отправляться в JSON-формате).
 * Также необходимо оповестить пользователя о состоянии отправки
 * * идет отправка
 * * отправлено
 * * ошибка
 * В поле с телефоном можно вводить //* только цифры и + (знак плюс).
 * В поле “Ваше имя” вводится только // * кириллица.
 */

// обрабатываем нашу форму в модальном окне

const sendForm = () => {
  const loadMessage = 'Идет отправка ...';
  const successMessage = 'Спасибо! Ваша заявка отправлена!';
  const errorMessage = 'Ошибка! Что-то пошло не так :(';

  const modalCallback = document.querySelector('#callback');
  const form = modalCallback.querySelector('form');
  const inputFio = form.querySelector('input[name="fio"]'); // поле ввода Ваше Имя
  const inputTel = form.querySelector('input[name="tel"]'); // поле ввода Телефон *

  // статус ответа пользователю
  const statusMessage = document.createElement('div');
  statusMessage.textContent = loadMessage;
  statusMessage.style.cssText = `font-size:1.5rem; font-weight:bold; color:#4e4e4e; text-align:center; padding: 5px 0;`;

  // валидация формы
  const formValidate = () => {
    // ввод символов в поле // *Ваше имя
    inputFio.addEventListener('input', (event) => {
      // <> валидация имени
      event.target.value = event.target.value.replace(/((?<=^)\s+)|((?<=\s)\s+)|([^а-яА-ЯёЁ\s])/ig, '');
    });
    // ввод цифр в поле // *Телефон
    inputTel.addEventListener('input', (event) => {
      // <> валидация номера телефона
      event.target.value = event.target.value.replace(/([^\d\+])|((?<=[\d\D])\++)|((?<=[\d\D]{12,})[\d\D])/g, '');
    });
  };
  formValidate();

  // функция очистки данных полей формы
  const clearForm = (form) => {
    // todo через время 1с очистка полей формы
    setTimeout(() => {
      form.querySelectorAll('input[type="text"]').forEach((field) => {
        field.value = ''; // очистка поля 
        // field.setAttribute('disabled', 'true'); // деактивируем поле
      });
    }, 1000);
    // todo через время удаление сообщения о статусе
    setTimeout(() => {
      statusMessage.remove();
    }, 7000);
    // todo закрытие формы через время
    // setTimeout(() => {
    //   const modalOverlay = document.querySelector('.modal-overlay'); // подложка под окно
    //   const modal = document.querySelector('.modal-callback'); // модальное окно
    //   modal.style.display = 'none';
    //   modalOverlay.style.display = 'none';
    //   // todo сделать анимацию animate.css
    //   modal.classList.remove('fadeIn');
    //   modal.classList.add('animated', 'fadeOut');

    //   // field.setAttribute('disabled', 'false');
    //   // field.value = '';
    // }, 9000);
  };

  // функция формирования запроса на сервер
  const postData = (body) =>
    fetch('server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }); // возвращает fetch запрос

  // * событие submit на форму
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // todo место для плейсхолдера
    form.appendChild(statusMessage); // добавляем сообщение на форму
    statusMessage.textContent = loadMessage;

    // собираем данные формы
    const formData = new FormData(form);
    let body = {};
    // заполняем тело запроса данными из формы
    formData.forEach((item, key) => {
      body[key] = item;
    });

    // запрос // возвращает fetch
    postData(body)
      .then((response) => {
        // отбрасываем ошибку 200
        if (response.status !== 200) {
          throw new Error('Server response not 200 !!!');
        }
        // тогда дальше без ошибок
        statusMessage.textContent = successMessage;
        console.log('Server success');
      })
      .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.error('Server error', error);
      });

    //очистка полей формы
    clearForm(form);
  }); //submit
};

export default sendForm;
