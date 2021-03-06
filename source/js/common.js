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

$('.variant-item').on('click', function() {
  $('html,body').animate({scrollTop:$('.input-sec').offset().top+"px"},{duration:1E3});
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




$('[data-modal=status]').on('click', function(e){
  e.preventDefault();
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

if ($(".form-list__item--data").length > 0) {
  $(function() {
    $('.form-list__item--data input').datepicker({
      showOn: "button",
      buttonImage: "../img/sprite/data.svg",
      buttonImageOnly: true,
      buttonText: "?????????????? ????????",
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

    /* ?????????????????????? datepicker */
    $.datepicker.regional['ru'] = {
      closeText: '??????????????',
      prevText: '????????????????????',
      nextText: '??????????????????',
      currentText: '??????????????',
      monthNames: ['????????????','??????????????','????????','????????????','??????','????????','????????','????????????','????????????????','??????????????','????????????','??????????????'],
      monthNamesShort: ['??????','??????','??????','??????','??????','??????','??????','??????','??????','??????','??????','??????'],
      dayNames: ['??????????????????????','??????????????????????','??????????????','??????????','??????????????','??????????????','??????????????'],
      dayNamesShort: ['??????','??????','??????','??????','??????','??????','??????'],
      dayNamesMin: ['????','????','????','????','????','????','????'],
      weekHeader: '????',
      dateFormat: 'dd.mm.yy',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
    };

    $.datepicker.setDefaults($.datepicker.regional['ru']);
  });


}


const mainTabs = document.querySelectorAll('.main-tab');


$('.lk-nav__menu').on('click', function (e) {
  e.preventDefault();
  $(this).addClass('active');
  $('.main-box').addClass('active');
  $('.tab-btn').remove('active');

  for (const mainTab of mainTabs) {
    mainTab.classList.remove('active');
  };

});

const tabMenu = document.querySelector('.lk-nav__menu');
const tabBox = document.querySelector('.main-box');


const tabsParr = document.querySelector('.lk-main');
if (tabsParr) {
  document.addEventListener('DOMContentLoaded', () => {
    const tabs = tabsParr.querySelector('.lk-main__box');
    const tabsBtn = tabsParr.querySelectorAll('.tab-btn');
    const tabsContent = tabsParr.querySelectorAll('.tab-block');
    if (tabs) {
      tabs.addEventListener('click', (e) => {

        if (e.target.classList.contains('tab-btn')) {
          e.stopPropagation();
          tabMenu.classList.remove('active');
          tabBox.classList.remove('active');
          const tabsPath = e.target.dataset.tabsPath;
          tabsBtn.forEach(el => {el.classList.remove('active')});
          tabsParr.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('active');
          tabsHandler(tabsPath);
        }

      });
    }
    const tabsHandler = (path) => {
      tabsContent.forEach(el => {el.classList.remove('active')});
      tabsParr.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
    };
  });
}


