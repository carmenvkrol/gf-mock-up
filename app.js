$(document).ready(function(){

  $('.javascript-row-button').click(function(){
    $(this).parent().parent().hide();
  });

  $('#load-more-button').click(function(){
    $('.load-more').show();
    $(this).hide();
  });

  var i = 1;

  setInterval(function(){
    var child = '.custom-image:nth-child(' + i + ')';

    i += 1;

    if (i === 6) {
      i = 1;
    }

    var nextChild = '.custom-image:nth-child(' + i + ')';

    $(child).hide();
    $(nextChild).fadeIn(2000);

  }, 5000);

});