 // gives the navbar a style when  scrolling down in browser

$(document).ready(function() {
    $(window).on('scroll', function() {
      if (Math.round($(window).scrollTop()) > 220) {
        $('.navbar').addClass('scrolled');
        $('.goHome').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
        $('.goHome').removeClass('scrolled');
      }
    });
  });
