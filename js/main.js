document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener ('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

});

document.addEventListener('keypress', (event) => {
  if (event.keyCode == 27) { 
    $('.modal').switchModal();
  }
});
// document.addEventListener('keypress', function (e) {
//     if(e.keyCode === 27) 
//   }); 
// $(document).keydown(function(event) { 
//   if (event.keyCode == 27) { 
//     $('.modal').hide();
//   }
// });

// document.addEventListener('keypress', (event) => {
//   if (event.keyCode === 27 {
//     switchModal
//   });
// });

// document.click(function (event) {
//   if ($(event.target).is('.modal')) {
//     switchModal();
//   }
// });