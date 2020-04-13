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
  modalThanks = $('.modal-thanks'),
  modalBtn = $('[data-toggle=modal]'),
  closeBtn = $('.modal__close'),
  closeBtnThanks = $('.modal-thanks__close'),
  scrollUp = $('.page-scroll__up');

// присвоение класса .modal--visible для модального окна при нажатии на кнопку
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });

// закрытие модального окна по нажатию на крестик
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });
// закрытие модального окн благодарности по нажатию на крестик
  closeBtnThanks.on('click', function () {
    modalThanks.toggleClass('modal-thanks--visible')
  });

// закрытие модального окна по нажатию клавиши esc
  $(this).keydown(function (e) {
    if (e.which === 27) {
      modal.removeClass('modal--visible')
    } 
});
// закрытие модального окна благодарности по нажатию клавиши esc
  $(this).keydown(function (e) {
    if (e.which === 27) {
      modalThanks.removeClass('modal-thanks--visible')
    } 
});

// закрытие модального окна по нажатию мышки вне диалогового  окна
  $(document).mouseup(function (e) {
    if (modal.has(e.target).length === 0) {
      modal.removeClass('modal--visible')
    }
  });
// закрытие модального окна благодарности по нажатию мышки вне диалогового  окна
  $(document).mouseup(function (e) {
    if (modalThanks.has(e.target).length === 0) {
      modalThanks.removeClass('modal-thanks--visible')
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
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  })
  var next = $('.swiper-button-next2'),
      prev = $('.swiper-button-prev2'),
      bullets = $('.swiper-pagination2');

  next.css('left', prev.width() + 20 + bullets.width() + 23)
  bullets.css('left', prev.width() + 23)


  // инициализация третьего слайдера
  var mySwiper3 = new Swiper ('.slider-3', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination22',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  })

  var slide = $('.swiper-slide__description');
  var nextB = $('.swiper-button-next2');
  var prevB = $('.swiper-button-prev2');
  for (let i=0; i<slide.length; i++){
    $(slide[i]).click(function(e) {
      e.preventDefault();
      $(".swiper-slide__row .swiper-slide__description--active").removeClass('swiper-slide__description--active');
      $(this).addClass('swiper-slide__description--active');
      mySwiper2.slideTo( i+1,1000,false )
      mySwiper3.slideTo( i+1,1000,false )
    });
    $(nextB).click(function() {
      if (mySwiper2.realIndex === i) {
        $(".swiper-slide__row .swiper-slide__description--active").removeClass('swiper-slide__description--active');
        $(slide[i]).addClass('swiper-slide__description--active');
      }
    });
    $(prevB).click(function() {
      if (mySwiper2.realIndex === i) {
        $(".swiper-slide__row .swiper-slide__description--active").removeClass('swiper-slide__description--active');
        $(slide[i]).addClass('swiper-slide__description--active');
      }
    });
  }
 
  
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
   $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: 'Ваш номер телефона'});
    
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
        minlength: 17
      },
      // правило объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true
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
      },
      policyCheckbox: {
        required: "Необходимо дать согласие на обработку данных"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('modal-thanks--visible')
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response)
        }
      });
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
      userPhone: {
        required: true,
        minlength: 17
      },
      'policy-checkbox': {
        required: true
      }
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не меньше двух символов",
        maxlength: "Максимальная длина имени 15 символов!"
      },
      userPhone: "Заполните поле",
      'policy-checkbox': {
        required: "Необходимо дать согласие на обработку данных"
      }
    },
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    // Если мешает появившися элемент в форме, то можно воспользоваться  встроеной функцией валидатора
  //   errorPlacement: function (error, element) {
  //     if (element.attr("type") == "checkbox") {
  //         return element.next('label').append(error);
  //     }
  
  //      error.insertAfter($(element));
  // },
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // правило объект (блок)
      userQuestion: {
        required: true,
        maxlength: 160
      },
      'policy-checkbox': {
        required: true
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
      },
      'policy-checkbox': {
        required: "Необходимо дать согласие на обработку данных"
      }
    }
  });


 //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.footer__map-wrap').children('.loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;

  // иницифлизация карт яндекс
  function init () {
      // Создание карты.\
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
        // .add(myPlacemarkWithContent); // с этим загрузка карты по наведению не работает

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMap.layers.get(0).get(0);    
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
    });
  }
  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.footer__map-wrap').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});

});