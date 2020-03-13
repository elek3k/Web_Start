document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');

  // присваивает модальному окну новый класс
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  // присвоение класса .modal--visible для модального окна при нажатии не кнопку
  modalBtn.forEach(e => {
    e.addEventListener ('click', switchModal);
  });

  // закрытие модального окна по нажатию на крестик
  closeBtn.addEventListener('click', switchModal);

  // закрытие модального окна по нажатию мышки вне диалогового  окна
  document.addEventListener("click", e => {
    if (e.target == modal) {
        modal.classList.remove("modal--visible");
    };
  });

  // закрытие модального окна по нажатию клавиши esc
  document.addEventListener('keydown', e => {
    if (e.keyCode === 27 ) {
      modal.classList.remove("modal--visible");
    }
  });

});