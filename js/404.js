var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
$(function () { 
  showText("h1", "I am error 404.", 0, 80);    
}); 

// Add hover effect sound (optional)
const hoverSound = new Audio('./audio/hover.mp3');
$('.btn-back').on('mouseenter', function() {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(function(error) {
        // Handle or ignore the error if audio can't be played
    });
});

// Handle back button click
$('.btn-back').on('click', function(e) {
    e.preventDefault();
    const href = $(this).attr('href');
    $('body').fadeOut(1000, function() {
        window.location.href = href;
    });
}); 