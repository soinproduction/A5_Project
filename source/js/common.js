
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
});


let tabSlider = new Swiper(".tab-nav", {
  spaceBetween: 20,
  slidesPerView: 4,
  navigation: {
    nextEl: ".tab-nav__next",
    prevEl: ".tab-nav__prev",
  },
});


$(document).ready(function(){
	$('.js-selectize').selectize();
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
