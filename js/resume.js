(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict


// Hover effect for marathi 
var text = ["Marathi", "मराठी"];
var elem1 = $("#language1");
var elem2 = $('#language2');
var hoverelem = $('#sideNav');
var hoverelem2 = $('#whitespace')
elem1.html(text[1]);
elem2.html(text[0]);
elem2.hide();
elem1.hover(function(){
    elem1.hide();
    elem2.fadeIn(1500);
});

