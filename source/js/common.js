let burger = $('.burger-btn');
let mobileMenu = $('.mobile-menu');
let body = $('body');

burger.on('click', function(){
  $(this).addClass('active');
  mobileMenu.addClass('active');
  body.addClass('active');
});

$(document).mouseup(function (e) {
  var container = $(".mobile-menu");
  if (container.has(e.target).length === 0){
      container.removeClass('active');
      burger.removeClass('active');
      body.removeClass('active');

  }
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


function itemTabs(evt, navName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    // tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove('active');
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(navName).className += " active";
  evt.currentTarget.className += " active";
  // document.getElementById(navName).className += " active";

}

// $('.tab-nav__list.swiper-slide .tablinks').removeClass('active');
// $('.tab-nav__list').each(function(item) {
//   // if (item.hasClass('swiper-slide-active')) {
//   //   $('.tab-nav__button').click();
//   // }







let mainSlider = new Swiper(".main-slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
        el: ".main-slider__dots",
        clickable: true,
      },
});



let partnersSlider = new Swiper(".index-partners__box", {
  spaceBetween: 30,
  slidesPerView: 6,

  breakpoints: {
    320: {
      slidesPerView: 3,
      autoplay: {
        delay: 1500,
      },
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1170: {
      slidesPerView: 6,
      spaceBetween: 30,
    }
  }
});










let tabSlider = new Swiper(".tab-nav", {
  spaceBetween: 20,
  slidesPerView: 4,
  navigation: {
    nextEl: ".tab-nav__next",
    prevEl: ".tab-nav__prev",
  },
  breakpoints: {
    320: {
      centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
    767: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});


$('.office-wrapp__geo').click(function(e) {
  e.preventDefault();
  $('.office-wrapp__image').removeClass('active');
  var block = this.nextElementSibling
  block.classList.add('active');
});

$('.close-window').click(function() {
  $('.office-wrapp__image').removeClass('active');
})




$('[data-modal=status]').on('click', function(){
  $('.overlay, #statusModal').fadeIn('slow');
});

$('.close-modal').on('click', function(){
  $('.overlay, #statusModal').fadeOut('slow');
});

$(document).mouseup(function (e) {
  var container = $(".modal-box");
  if (container.has(e.target).length === 0){
      container.fadeOut('slow');
      $('.overlay').fadeOut('slow');

  }
});

$('.js-selectize').selectize();

if ($(".form-list__item")) {

  $(function() {
    let input = $(".form-list__item--data input");
    input.datepicker({
      showOn: "button",
      buttonImage: "../img/sprite/data.svg",
      buttonImageOnly: true,
      buttonText: "Выбрать дату",
      minDate: 0,
      beforeShowDay: function(date){
        var dayOfWeek = date.getDay();
        if (dayOfWeek == 0 || dayOfWeek == 6){
          return [false];
        } else {
          return [true];
        }
      }
    });

      /* Локализация datepicker */
      $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
      };

      $.datepicker.setDefaults($.datepicker.regional['ru']);
  });



}


partnersSlider && partnersSlider.autoplay.start();






