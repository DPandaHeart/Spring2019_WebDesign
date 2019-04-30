$(document).ready(function() {
  var getGif = function() {
    var gif = [];
    $('img').each(function() {
      var data = $(this).data('alt');
      gif.push(data);
    });
    return gif;
  }
  var gif = getGif();
  // Preload all the GIF.
var image = [];

$.each(gif, function(index) {
  image[index]     = new Image();
  image[index].src = gif[index];
});

$('figure').on('click', function() {

  var $this   = $(this),
          $index  = $this.index(),

          $img    = $this.children('img'),
          $imgSrc = $img.attr('src'),
          $imgAlt = $img.attr('data-alt'),
          $imgExt = $imgAlt.split('.');

  if($imgExt[1] === 'gif') {
      $img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
  } else {
      $img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
  }

   });

});

// $("html").keydown(function(event){
//
//         if(event.which == "37")
//             $("#hero").stop(true).animate({"left" : "-=30px"});
//
//         if(event.which == "39")
//             $("#hero").stop(true).animate({"left" : "+=30px"});
//
//         if(event.which == "38")
//             $("#hero").stop(true).animate({"top" : "-=30px"});
//
//         if(event.which == "40")
//             $("#hero").stop(true).animate({"top" : "+=30px"});
// });

// Making that good pup Move!!


// $( "#go" ).click(function() {
//   $( ".block" ).animate({ left: "+=100px" }, 2000 );
// });
//
// // Stop animation when button is clicked
// $( "#stop" ).click(function() {
//   $( ".block" ).stop();
// });
//
// // Start animation in the opposite direction
// $( "#back" ).click(function() {
//   $( ".block" ).animate({ left: "-=100px" }, 2000 );
// });
