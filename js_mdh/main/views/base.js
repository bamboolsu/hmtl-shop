// 所有header，footer的js动态

;$(function() {

  // 定时器
  var isShowNav;

  if ($('.nav').offset()) {
    var y = $('.nav').offset().top;

    $(window).scroll(function(event) {
        var top = $(window).scrollTop();
        if (top >= y) {
              $('.nav').addClass('current');
              $('.search').addClass('selected');
            } else {
              $('.nav').removeClass('current');
              $('.search').removeClass('selected');
              $('#header .search').css('margin-bottom', 0);
            }
        });
      }


  $('.nav>ul>li').hover(function() {

    var num=$('.innav ul li').length;
    var _this = this;
    if(num>0){
      $('.innav ol li').eq(0).css('display','block').siblings().css('display','none');
      $('.innav ul li').eq(0).addClass('current').siblings().removeClass('current');
    }
    clearTimeout(isShowNav);
    isShowNav = setTimeout (function () {
       $(_this).find('.innav').slideDown(200);
    }, 100);
   
  }, function() {
    var _this = this;
    clearTimeout(isShowNav);
    isShowNav = setTimeout (function () {
      $(_this).find('.innav').slideUp(150);
    }, 100);
  });
  
  

  $('.innav>ul>li').mouseover(function(event) {
    var n=$(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $('.innav>ol>li').eq(n).css('display', 'block').siblings().css('display', 'none');
  });

  // 导航栏初始化
  var isNumber=$('[data-header="nav"]').text().length;
    if (isNumber<=2) {
      $('[data-header="nav"]').parent('li').addClass('spacing')
    };

  $('.news ul li:nth-child(4n)').css('margin-right', 0);
  $('.index-moods ul li:nth-child(4n)').css('margin-right', 0);

  // 人气商品开始
  $('.moods ul li').hover(function() {
    $(this).find('.top').stop().fadeToggle(400);
    // 人气商品悬浮层的标题
    for (var i = 0; i<$('[data-moods="top"]').length; i++) {

      var topHeight=$('[data-moods="top"]').eq(i).height();
      
      if (topHeight>24) {
        $('[data-moods="top"]').eq(i).css('padding-top', '17px');
      } else{
        $('[data-moods="top"]').eq(i).css('padding-top', '38px');
      }
    }

  });

  
    


  // 图片区域初始化
  $('.list-images li').eq(1).css('margin-right', '0');
  $('.list-images li').eq(4).css('margin-right', '0');



   // placehloder兼容处理
  if (!('placeholder' in document.createElement('input'))) {

    $('input[placeholder],textarea[placeholder]').each(function() {
      var that = $(this),
        text = that.attr('placeholder');
      if (that.val() === "") {
        that.val(text).addClass('placeholder');
      }
      that.focus(function() {
          if (that.val() === text) {
            that.val("").removeClass('placeholder');
          }
        })
        .blur(function() {
          if (that.val() === "") {
            that.val(text).addClass('placeholder');
          }
        })
        .closest('form').submit(function() {
          if (that.val() === text) {
            that.val('');
          }
        });
    });
  }



  // list初始化
  $('[data-items="list"]:nth-child(3n)').addClass('nth-child-three');

  // 列表页左侧导航
    $('[data-list="innav"]').click(function(event) {
      $(this).addClass('current').siblings().removeClass('current');
      $(this).parents('[data-list="nav"]').siblings().find('[data-list="innav"]').removeClass('current');
    });

    $('[data-list="brand"]').click(function(event) {
      $(this).addClass('current').siblings().removeClass('current');
    });


  // 侧边栏悬停效果
    $('[data-list="nav"]').click(function(event) {
      $(this).toggleClass('current');

    });


  $(function () {
    $('[data-list="innav"]').each(function (e) {
      var isShow = $(this).hasClass('current');
      if (isShow)
        $(this).parents('[data-list="nav"]').addClass('current'); 
    })
  });


    // 注册页
    $('.form .password input').focus(function(event) {
      $('.form .register-fix').css('display', 'block');
    });

    // 详情页分享效果
    $('[data-share="btn"]').click(function(event) {
      
      // var num=$('[data-share="way"]').css('margin-left');
      // console.log(num)

      // if(num<0){
      //   $('[data-share="way"]').animate({'margin-left': 20}, 300)
      // }else{ 
      //   $('[data-share="way"]').animate({'margin-left': -215}, 300)
      // };
      $('[data-share="way"]').toggleClass('current');
    });
    // 详情页含税额计算
      var money=$('[data-item="pirce"]').html();
      var rate=$('[data-item="tax"]').html();
      var isMoney=money*rate;
      $('[data-item="number"]').html(isMoney)

});