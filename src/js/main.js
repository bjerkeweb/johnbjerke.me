$(function() {

  var $overlay = $('.overlay'),
      $toggleOverlay = $('#js-trigger-overlay'),
      $overlayClose = $('.overlay-close');
      $body = $('body');

  $toggleOverlay.on('click', function(e) {
    e.preventDefault();
    $overlay.toggleClass('is-open');
    $body.addClass('noscroll')
  });

  $overlayClose.on('click', function(e) {
    e.preventDefault();
    $overlay.removeClass('is-open');
    $body.removeClass('noscroll')
  });

  // Hide overlay on esc press
  $(document).keydown(function(e) {
    if(e.keyCode == 27 && $overlay.hasClass('is-open')) {
      $overlay.removeClass('is-open');
      $body.removeClass('noscroll')
    }
  });

  // init sliders
  $('.slider').bxSlider({
    auto: true,
    mode: 'fade',
    speed: 600,
    controls: false
  });

});

// init css transitions
window.onload = function() {
  $("body").removeClass('preload');
}
