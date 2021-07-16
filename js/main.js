$(function(){

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  })

  $(".menu a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  
  $('.slider__inner').slick({

    nextArrow: '<button type="button" class="slick-next">След</button>',
    
    prevArrow: '<button type="button" class="slick-prev">Назад</button>'

  })

})