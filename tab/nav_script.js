"use strict";
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");


  let buttons = document.querySelectorAll(".list");
  let pages = document.querySelectorAll('.page');
  

  //добавляем слушатель на listButton
  buttons.forEach((btnElem) => {

    //обрабатываем клик по кнопке списка
    btnElem.addEventListener("click", (event) => {
      event.preventDefault();//на всякий случай

      let target = event.target.closest(".list");
      //номер нажатой кнопки
      let buttonNumber = target.dataset.buttonNumber;      

      //убираем класс .active со всех кнопках елем списка
      buttons.forEach((listElem) => {

        if ( target === listElem ) {
          //добавляем класс .active только нужному елементу
          target.classList.add("active");
        } else {
          //у остальных .active удаляем
          listElem.classList.remove("active");
        }
      });


      //убираем класс visible-page со всех страниц
      pages.forEach((pageItem) => {

        let pageNumber = pageItem.dataset.pageNumber;

        if ( pageNumber === buttonNumber ) {
          //добавляем только к нужной кнопке
          pageItem.classList.add('visible-page');
        } else {
          //удаляем у остальных страниц
          pageItem.classList.remove('visible-page');
        }
        
      });
      
    });
  });
  


});
