 // animation when clicking link that directs to a different part of the page

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 250, 'linear');
  });
});
