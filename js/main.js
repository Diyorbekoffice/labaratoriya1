$(document).ready(function($) {

    'use strict';
  
    $(".Modern-Slider").slick({
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      dots: true,
      fade: true,
      pauseOnDotsHover: true,
      cssEase: 'linear',
      draggable: false,
      prevArrow: '<button class="PrevArrow"></button>',
      nextArrow: '<button class="NextArrow"></button>',
    });
  
    $('#nav-toggle').on('click', function(event) {
      event.preventDefault();
      $('#main-nav').toggleClass("open");
    });
  
    const $tabs = $('.tabs');
    $tabs.each(function() {
      const $tabGroup = $(this).data('tabgroup');
      $(this).find('a').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $($tabGroup).children('div').hide();
        $(target).show();
      });
    });
    
    $(".box-video").click(function() {
      $('iframe', this)[0].src += "&amp;autoplay=1";
      $(this).addClass('open');
    });
  
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      responsive: {
        0: { items: 1, nav: true },
        600: { items: 2, nav: false },
        1000: { items: 3, nav: true, loop: false }
      }
    });
  
    const contentSections = $('.content-section, .main-banner');
    const navigation = $('nav');
  
    navigation.on('click', 'a', function(event) {
      event.preventDefault();
      smoothScroll($(this.hash));
    });
  
    $(window).on('scroll', updateNavigation);
    updateNavigation();  
  
    function updateNavigation() {
      contentSections.each(function() {
        const $section = $(this);
        const sectionName = $section.attr('id');
        const navLink = $('nav a[href="#' + sectionName + '"]');
        const sectionTop = $section.offset().top;
        const sectionHeight = $section.height();
        const windowTop = $(window).scrollTop();
        const windowHeight = $(window).height();
  
        if (sectionTop - windowHeight / 2 < windowTop && sectionTop + sectionHeight - windowHeight / 2 > windowTop) {
          navLink.addClass('active-section');
        } else {
          navLink.removeClass('active-section');
        }
      });
    }
  
    function smoothScroll(target) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  
    $('.button a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
  
  });
  