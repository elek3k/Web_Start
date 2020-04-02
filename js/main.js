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
  var mySwiper = new Swiper ('.swiper-container__mod', {
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


  // инициализация второг слайдера
  var mySwiper2 = new Swiper ('.slider-2', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  })

  var next = $('.swiper-button-next2'),
      prev = $('.swiper-button-prev2'),
      bullets = $('.swiper-pagination2');

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
  
  //  маска телефона
   $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: '+7(___) ___-__-__'});
    
  // валидация форм
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 12
      },
      // правило объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не меньше двух символов",
        maxlength: "Максимальная длина имени 15 символов!"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный имейл"
      }
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // правило объект (блок)
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      // строчное правило
      userPhone: 'required',
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не меньше двух символов",
        maxlength: "Максимальная длина имени 15 символов!"
      },
      userPhone: "Заполните поле"
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      // правило объект (блок)
      userQuestion: {
        required: true,
        maxlength: 160
      }
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не меньше двух символов",
        maxlength: "Максимальная длина имени 15 символов!"
      },
      userPhone: "Заполните поле",
      userQuestion: {
        required: "Заполните поле"
      }
    }
  });

  // иницифлизация карт яндекс
  ymaps.ready(function () {
      // Создание карты.
      var myMap = new ymaps.Map("Y-map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [44.148599, 43.473896],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 13
      }, {
        searchControlProvider: 'yandex#search'
      }),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Это моё фото',
        balloonContent: 'Небольшой городок'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-icon.png',
        // Размеры метки.
        iconImageSize: [30, 35],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-15, -55]
    });
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
  })

});