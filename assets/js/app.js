// Disable empty links scrolling to top

$(document).ready(function () {
    $('a[href="#"').click(function (e) {
      e.preventDefault();
    });
});

// Mobile nav menu

$(document).ready(function () {
    $('.nav__menu-icon').on('click', function() {
        $('.mobile-menu').slideDown('slow');
      });
      
      $('.nav__menu-icon--close').on('click', function() {
          $('.mobile-menu').slideUp('slow');
          $('.header').removeClass('header--mobile-menu');
      });
      
});
