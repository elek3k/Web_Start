/*
// отслеживание окончания загрузки страницы и после этого выполнения функции
document.addEventListener("DOMContentLoaded", function(event) { 

  // объявление переменных
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
*/

// отслеживание окончания загрузки страницы и после этого выполнения функции
$(document).ready(function () {

  // объявление переменных
  var modal = $('.modal'),
  modalBtn = $('[data-toggle=modal]'),
  closeBtn = $('.modal__close'),
  scrollUp = $('.page-scroll__up');

// присвоение класса .modal--visible для модального окна при нажатии не кнопку
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });

// закрытие модального окна по нажатию на крестик
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });

// закрытие модального окна по нажатию клавиши esc
  $(this).keydown(function (e) {
    if (e.which === 27) {
      modal.removeClass('modal--visible')
    } 
});

// закрытие модального окна по нажатию мышки вне диалогового  окна
  $(document).mouseup(function (e) {
    if (modal.has(e.target).length === 0) {
      modal.removeClass('modal--visible')
    }
  });

  // плавающая кнопка прокрутки станицы вверх
  $(window).scroll(function() {
		if($(this).scrollTop() > 400) {
			scrollUp.show();
		} else {
			scrollUp.hide();
		}
	});
 
	scrollUp.click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
  });
  
  // инициализация слайдера
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next'),
      prev = $('.swiper-button-prev'),
      bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 20)
  bullets.css('left', prev.width() + 20)
  
  // инициализация библиотеки wow
  new WOW().init();

  // инициализация собственной анимации при проктрутке страницы
  var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.control__text').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
        self.addClass('test');
      } 
      else {
        self.removeClass('test')
      };
      if ($(document).scrollTop() + windowHeight >= height + 400) {
        self.removeClass('test');
      } 
    });
	});
    

});