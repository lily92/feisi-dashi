$(function () {
  // 加载header
  $('header').load("header.html", "", function (response, status, request) {
    $(this).html(response);
    $('.nav-ul li').hover(function () {
        // over
        $('.sub-menu').stop().slideUp();
        $(this).addClass('cur');
        $(this).find('.sub-menu').stop().slideDown();
        
      }, function () {
        // out
        $('.sub-menu').stop().slideUp();
        $(this).removeClass('cur');
      }
    );

    //移动端导航
    $('.p-nav-icon').click(function (e) { 
      e.preventDefault();
      var _this = $(this);
      var menu = _this.parent().find('.psub-menu');
      $('.psub-menu').slideUp();
      $('.p-nav-icon').text('+')
      if(menu.is(':hidden')){
        menu.stop().slideDown();  
        _this.text('-')
      }else{
        menu.stop().slideUp();  
        _this.text('+')
      }

    });
  });


  //加载footer
  $('footer').load("footer.html", "", function (response, status, request) {
    $(this).html(response);

    $('#wx_icon').click(function (e) { 
      e.preventDefault();
      $('.wx-master').css({'display':'flex'})
    });
    $('.close-btn').click(function (e) { 
      e.preventDefault();
      $('.wx-master').css({'display':'none'})
      
    });
  });

  new WOW().init();


  $(document).ready(function () {
    $("header").on("click", ".hamburger", function () {
      $(this).toggleClass("is-active");
      $('.navbar-collapse').toggleClass('active');
    });

   


  })


 
})

