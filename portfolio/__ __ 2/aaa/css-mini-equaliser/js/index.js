var audio = document.getElementById('music');

$('.bars').click(function() {
  if (audio.paused == false) {
      audio.pause();
      $('.bars').removeClass('active');
  } else {
      audio.play();
      $('.bars').addClass('active');
  }
});