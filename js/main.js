$(function () {
  function updateNavText() {
    if ($(window).width() < 768) {
      $('.product-nav ul li:last-of-type a').text('Home');
    } else {
      // Optional: Reset text when the screen is wider than 768px
      $('.product-nav ul li:last-of-type a').text('Home & Lifestyle');
    }
  }

  // Initial check
  updateNavText();

  // Check on window resize
  $(window).resize(function () {
    updateNavText();
  });

  // start accordion
  $(document).ready(function () {
    $('.accordion-title').click(function () {
      $(this).next('ul').slideToggle(500);
      $(this).find('svg').toggleClass('fa-plus fa-minus');
      $('.accordion-title').not(this).next('ul').slideUp(500);
      $('.accordion-title')
        .not(this)
        .find('svg')
        .removeClass('fa-minus')
        .addClass('fa-plus');
    });
  });
  // end accordion

  // start side bar
  $(document).ready(function () {
    $('nav .openNav').click(function () {
      $('aside').addClass('open').removeClass('close');
      $('.overlay').show();
    });

    $('aside .close, .overlay').click(function () {
      $('aside').removeClass('open').addClass('close');
      $('.overlay').hide();
    });

    $(document).keydown(function (e) {
      if (e.key === 'Escape' && $('aside').hasClass('open')) {
        $('aside').removeClass('open').addClass('close');
        $('.overlay').hide();
      }
    });
  });
  // end side bar

  $(window).scroll(function () {
    if ($(this).scrollTop() > 48) {
      $('.language').slideUp(200);
      // $('.release').css({ paddingTop: 154 + 40 });
    } else {
      $('.language').slideDown(200);
    }
  });
  // start add to wish list
  $('.addToWishlist').click(function () {
    $(this).find('svg').attr('data-prefix', 'fas');
  });
  // end add to wish list

  // start open shopping
  let openElement = null;

  function setupToggle(triggerSelector, targetSelector) {
    $(triggerSelector).on('click', function (event) {
      if (openElement && openElement !== targetSelector) {
        $(openElement).fadeOut(500);
      }

      $(targetSelector).fadeToggle(500);
      openElement = $(targetSelector).is(':visible') ? targetSelector : null;
      event.stopPropagation();
    });

    $(targetSelector).on('click', function (event) {
      event.stopPropagation();
    });

    $(document).on('click', function () {
      $(targetSelector).fadeOut(500);
      openElement = null;
    });
  }

  setupToggle('.cart', '.mincart');

  setupToggle('.wishlist', '.minWishlist');

  // end open shopping

  // Start Toggle Direction
  $('#toggleDirection').click(function () {
    $('#rtlStylesheet').prop('disabled', function (_, val) {
      return !val;
    });
  });
  // End Toggle Direction
});
