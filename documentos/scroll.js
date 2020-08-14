$(document).ready(function() {
    $('.menu-a[href^="#"]').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('.container-fluid').animate({ scrollTop: destino.offset().top }, 500);
      console.log(destino)
      return false;
    });
  });