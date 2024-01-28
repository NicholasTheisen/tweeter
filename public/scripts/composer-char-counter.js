$(document).ready(function() {
  $('.new-tweet textarea').on('input', function() {
    var inputLength = $(this).val().length;
    var remaining = 140 - inputLength;
    var counter = $(this).closest('.new-tweet').find('.counter');
    counter.text(remaining);

    if (remaining < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', '');
    }
  });
});