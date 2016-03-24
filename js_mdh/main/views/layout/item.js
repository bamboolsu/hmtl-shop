;define(['jquery', 'backbone'], function ($, backbone) {

  var Views = backbone.View.extend({

    el: 'body',

    // 事件加载器
    events: function () {
      // 'click body'  : 'bodyClick'
    },

    // 初始化加载
    initialize: function() {

      this.render();
      return this;
    },


    render: function () {


       // 窗口固定区域开始
      $('.fix li').mouseenter(function(event) {
        $(this).find('.infix').stop().animate({'right':46}, 300)
      }).mouseleave(function(event) {
        $(this).find('.infix').stop().animate({'right':-120}, 300)
      });

      $('.news ul li:nth-child(4n)').css('margin-right', 0);
      $('.moods ul li:nth-child(4n)').css('margin-right', 0);

      // 导航栏悬浮效果
       $('.nav ul li').hover(function() {
        $(this).find('.innav').stop().slideDown(300);
      }, function() {
        $(this).find('.innav').stop().slideUp(300);
      });
    }

  });

  return Views;
})