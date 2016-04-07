// Load once DOM is ready
$(document).ready(function() {

// Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.
  $(function() {
      $('body')
          .fadeIn(2200); //  FadeIn @ 2200 milliseconds
  });

var $p = $('p');

// Give each paragraph a yellow background only when the mouse is over it.
  $p.mouseover(function() {
        $(this).css('background-color', 'yellow');
  });

  $p.mouseout(function() {
        $(this).css('background-color', '');
  });


// Set up a click event on every `<h2>` element that simultaneously fades it to 25 percent opacity while growing its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.

  $('h2').on('click', function(){
    $(this).animate({
          'opacity': '0.25',
          'margin-left': '20px'
    }, 400, 'swing', function(){
      $('.speech').animate({
          'opacity': '0.5'
      });
    });

  });

  // - **Bonus:** Make the style switcher work.

  $('#switcher-default').on('click', function(){
    $('body').css('font-size', '62.5%');
  });

  $('#switcher-large').on('click', function(){
    $('body').css('font-size', '80%');
  });

  $('#switcher-small').on('click', function(){
    $('body').css('font-size', '50%');
  });

// - **Challenge:** React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).

$(document).on('keydown', function(event){
    if (event.which === 37) {
      $('#switcher').stop().animate({
          'margin-left': '-=20px'
      });
    } else if (event.which === 38) {
      $('#switcher').stop().animate({
          'margin-top': '-=20px'
      });
    } else if (event.which === 39) {
      $('#switcher').stop().animate({
          'margin-left': '+=20px'
      });
    } else if (event.which === 40) {
      $('#switcher').stop().animate({
          'margin-top': '+=20px'
      });
    }
});

});
