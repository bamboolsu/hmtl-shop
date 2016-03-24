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

    }

  });

  return Views;
})