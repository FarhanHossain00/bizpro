$(document).ready(function () {
  //==============================
  //preloader
  $(window).on("load", function () {

    $('.overlay-loader, .preloader h4').delay(600).fadeOut();
    $('.preloader').addClass('close').delay(3000).fadeOut();
  });

  //==============================


  $(window).on("load", function () {

    $('.overlay-loader, .preloader h4').delay(600).fadeOut();
    $('.preloader').addClass('close').delay(3000).fadeOut();
  });
  //==============================
  // smooth scroll
  //==============================
  $("#menu-target li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000);

  });

  //Navbar toggler
  $('.navbar .navbar-nav li a').click(function () {
    $('.navbar .navbar-collapse').removeClass('show')
  })


  //==============================
  //on-scroll
  //==============================
  $(window).on('scroll', function () {
    var wscroll = $(this).scrollTop();
    //fixed-nav
    wscroll > 1 ? $(".theme-main-header").addClass("fixed") : $(".theme-main-header").removeClass("fixed");

    // go top appear
    wscroll > 700 ? $("#goTop").fadeIn() : $("#goTop").fadeOut();

  });

  //go top
  $("#goTop").click(function () {
    $("body, html").animate({
      scrollTop: 0
    }, 600);
  });


  //==============================
  //mix it up
  //==============================
  var mixer = mixitup('.img-gallery');
  $(".project-menu ul li").click(function () {
    $(".project-menu ul li").removeClass("active")
    $(this).addClass("active")
  });

  $(".theme-main-menu .navbar-nav>li").click(function () {
    $(".theme-main-menu .navbar-nav>li").removeClass("active")
    $(this).addClass("active")
  });



  // progress bar
  $("#skill").waypoint(function () {
    $('#bar1').barfiller({
      barColor: "#e62d3f",
      duration: 1500,
    });
    $('#bar2').barfiller({
      barColor: "#4E046D",
      duration: 1500,
    });
    $('#bar3').barfiller({
      barColor: "#004790",
      duration: 1500,
    });
    $('#bar4').barfiller({
      barColor: "#f9690e",
      duration: 1500,
    });
    $('#bar5').barfiller({
      barColor: "#009C41",
      duration: 1500,
    });


  }, {
    offset: 300,
  });



  //=================================\\
  //    Client section slide
  //=================================\\
  $("#client-slide").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: ["<i class='fa fa-arrow-left'>", "<i class='fa fa-arrow-right'>"]
  });

  $("#price-slide").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    responsive: {
      400: {
        items: 1,
        dots: true,
      },
      700: {
        items: 2,
        dots: true
      },
      992: {
        items: 3
      }
    }
  });

  //contact trigger
  $(".contact-bottom .form-control").on('focus', function () {
    $(this).parent().addClass('active');
  }).blur(function () {
    if ($(this).val() === '') {
      $(this).parent().removeClass('active')
    }
  })


});