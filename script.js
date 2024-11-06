$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  $('.portfolio .button-container .btn').click(function () {
    const filter = $(this).data('filter'); 

    const boxes = $('.portfolio .image-container .box');
    
    if (filter === 'all') {
      boxes.show(400);
    } else {
      boxes.not('.' + filter).hide(200);
      boxes.filter('.' + filter).show(400);
    }
  });

  $('#theme-toggler').click(function () {
    $(this).toggleClass('fa-sun');
    $('body').toggleClass('dark-theme');
  });

  $('a[href*="#"]').click(function (e) {
    e.preventDefault();

    const target = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 500, 'linear');
  });

});

window.onscroll = function() {updateScrollProgress()};

function updateScrollProgress() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = `${scrolled}%`; 
}
