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
    	// 导航栏悬停效果
    	$('.nav ul li').hover(function() {
	      $(this).find('.innav').stop().slideDown(300);
	    }, function() {
	      $(this).find('.innav').stop().slideUp(300);
	    });

    	// 图片悬停效果开始
    	$('.moods ul li').hover(function(){
			$(this).find('.top').stop().slideDown(500);
		},function(){
			$(this).find('.top').stop().slideUp(500);
		});

		// 购买导航开始
		$('.goods-nav span').hover(function() {
			$(this).find('.goods-opt').stop().slideDown(300);
		}, function() {
			$(this).find('.goods-opt').stop().slideUp(300);
		});


		$('.goods-opt a').click(function() {
			var text= $(this).html();
			$(this).parents('span').html(text);
		});
    }
  });

  return Views;
})