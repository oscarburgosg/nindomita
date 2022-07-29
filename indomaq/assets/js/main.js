(function($) {
  
  "use strict";  

  $(window).on('load', function() {

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}

    if(navigator.userAgent.match(/iPad/)) {
      $('html').addClass('iphone');
    }

    if(navigator.userAgent.match(/iPhone/)) {
        $('html').addClass('iphone');
    }

    // loader
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });

    $('.anchor-proyecto').click(function () {
      $('html, body').animate({
          scrollTop: ($('#proyectos').offset().top) - 150
      }, 500);
    });

    $('.anchor-somos').click(function () {
      $('html, body').animate({
          scrollTop: ($('#somos').offset().top) - 150
      }, 500);
    });

    $('.anchor-solucion').click(function () {
      $('html, body').animate({
          scrollTop: ($('#solucion').offset().top) - 150
      }, 500);
    });

    $('.anchor-contacto').click(function () {
      $('html, body').animate({
          scrollTop: ($('#contacto').offset().top) - 150
      }, 500);
    });

    $('.contactame.mobile .escribenos').click(function () {
      $('html, body').animate({
          scrollTop: ($('#contacto').offset().top) - 150
      }, 500);
    });

    // cerrar navbar en el click
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

    // slick
    $('.proyecto .card-proyect__images').slick({
			infinite: false,
			slidesToShow: 1
		});

    // carrusel mobile proyectos
    $('.proyectos .cards').slick({
			infinite: false,
      settings: "unslick",
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
		});

    // destruir carrusel desktop proyectos
    if ($(window).width() >= 767) {
      $('.proyectos .cards').slick('unslick');
    }

    //carrusel home
    $('.principales > div').slick({
      infinite: true,
      speed: 100,
      dots: true,
      navigation: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
              }
          }
      ]
    });

    // if ($(window).width() >= 767) {
    //   $('.interes .grid').slick('unslick');
    // }

    // volver arriba
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

    // formularios top - bottom
    $("#contactForm").submit(function (e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $cfResponse = $('#contactFormResponse'),
            $cfsubmit = $("#cfsubmit"),
            cfsubmitText = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax(
            {
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data) {
                    $cfResponse.html(data);
                    $cfsubmit.text(cfsubmitText);
                    $('#contactForm input[name=name]').val('');
                    $('#contactForm input[name=email]').val('');
                    $('#contactForm textarea[name=message]').val('');
                },
                error: function (data) {
                    alert("Ha ocurrido un error con alguno de los datos ingresados. Por favor reintente o escribanos un mail.");
                }
            });

        return false;

    });

    $("#contactFormBottom").submit(function (e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $cfResponse = $('#contactFormResponseBottom'),
            $cfsubmit = $("#cfsubmit"),
            cfsubmitText = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax(
            {
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data) {
                    $cfResponse.html(data);
                    $cfsubmit.text(cfsubmitText);
                    $('#contactFormBottom input[name=name]').val('');
                    $('#contactFormBottom input[name=email]').val('');
                    $('#contactFormBottom textarea[name=message]').val('');
                },
                error: function (data) {
                    alert("Ha ocurrido un error con alguno de los datos ingresados. Por favor reintente o escribanos un mail.");
                }
            });

        return false;

    });

  });      

}(jQuery));
