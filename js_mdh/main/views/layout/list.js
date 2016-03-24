;define(['jquery', 'backbone'], function ($, backbone) {

  var Views = backbone.View.extend({
    el: 'body',

    events: function () {

    },

    initialize: function() {
      this.render();
      return this;
    },

    render: function () {
      	// 图片区域初始化
    	$('.list-images li').eq(1).css('margin-right', '0');
    	$('.list-images li').eq(4).css('margin-right', '0');
    	// 导航栏悬停效果
    	$('.nav ul li').hover(function() {
	      $(this).find('.innav').stop().slideDown(300);
	    }, function() {
	      $(this).find('.innav').stop().slideUp(300);
	    });

    	 // 窗口固定区域开始
	    $('.fix li').mouseenter(function(event) {
	      $(this).find('.infix').stop().animate({'right':46}, 300)
	    }).mouseleave(function(event) {
	      $(this).find('.infix').stop().animate({'right':-120}, 300)
	    });
	    // 侧边栏悬停效果
	    $('.list-nav li').mouseover(function() {
	    	var num=$(this).index();
	    	$(this).find('.list-twoCategory').show();
	    	$(this).find('.list-twoCategory ul li').eq(num-1).addClass('current').siblings().removeClass('current');
	    }).mouseout(function() {
	    	var num=$(this).index();
	    	$(this).find('.list-twoCategory').hide();
	    });
    }
  });

  return Views;
})