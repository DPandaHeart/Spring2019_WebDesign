$(document).ready(function() {
  // $('h1').css('color', 'white');
  $('#number1').click(function() {
    $('#number1').css('color', 'white');
  });

  $('#number2').click(function() {
    $('#number2').css('color', 'gold');
        setInterval(function() {
          $('#number2').fadeIn(300).fadeOut(500);
      }, 1000);
  });

  $('#number3').click(function() {
    $('#number3').css('color', 'DeepPink');
        setInterval(function() {
          $('#number3').fadeIn(5).fadeOut(5);
      }, 1000);

  });

  $('#number4').click(function() {
    $('#number4').css('color', 'white');
        setInterval(function() {
          $('#number4').fadeIn(2).fadeOut(2);
        }, 5);
  });

  $('#number5').click(function() {
    $('#number5').css('color', 'Cyan');
    $('#number5').blink(); // default is 500ms blink interval.

  });

    // setInterval(function() {
    //     $('#number1').fadeIn(300).fadeOut(500);
    // }, 1000);







    setInterval(function() {
      $('#number5').fadeIn(300).fadeOut(500);
  }, 1000);

});






















$('p').addClass('bigger');
console.log('added bigger');
$('p').click(function(){
  $('p').css('color', 'white');
  // added a message to the console, helpful in debugging
  console.log('added white');
  $('body').toggleClass('bodyBG');
});
