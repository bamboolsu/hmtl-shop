/**
 * 输入手机号码页面的效果
 */

;(function ($, window) {
  // 构造函数
  function FindPassword (options) {
    if (!(this instanceof FindPassword)) return new FindPassword(options);
    this.init.apply(this, arguments);
  };

  FindPassword.fn = FindPassword.prototype;

  // 初始化
  FindPassword.fn.init = function (options) {
    this.options = options;
    this.documentClick();
  };

  // 事件
  FindPassword.fn.documentClick = function () {
    // 绑定更换图片验证事件
    $('[data-tag="codeImgClick"]').bind('click', $.proxy(this.codeImgClick, this));

    // 提交数据到后台
    $('[data-tag="submit"]').bind('click', $.proxy(this.submitClick, this));
  };

  // 更换图片验证事件
  FindPassword.fn.codeImgClick = function () {
    var time = this.options.codeImgSrc+(new Date()).getTime();
    console.log("codeImgSrc: "+ time);
    $('[data-tag="codeImg"]').attr('src', time);
  };

  // 提交数据到后台
  FindPassword.fn.submitClick = function () {
    var self = this;
    var $mobile = $('[data-tag="mobile"]').val();
    var $code = $('[data-tag="code"]').val();
    var $prompt = $('[data-tag="prompt"]')
    var mobile = $.trim($mobile);
    var code = $.trim($code);
    var param = /^1[3|4|5|7|8|9]{1}\d{9}$/g;
    var paramCode = /[0-9a-zA-Z]{4}/;
    var data = {};

    if (!param.test(mobile)) {
      $prompt
        .removeClass('hidden')
        .find('span')
        .html('请输入正确的手机号');
      return false;
    }
    if (!paramCode.test(code)) {
      $prompt
        .removeClass('hidden')
        .find('span')
        .html('请输入正确的验证码');
      return false;
    }

    $.extend(data, {mobile: mobile, code: code}, this.options.data);

    console.log('FindPasswordPost: ');
    console.log(data);

    $.ajax({
      url: self.options.urlFindPasswordPost,
      type: "POST",
      data: self.options.data,
      dataType: "json",
      cache: false,
      success: function(message) {

        console.log("message: ");
        console.log(message);

        if (message.type == "success") {
          self.getSuccess();
        }
        else {

        }

       }
    });
  };

  // 手机号码验证
  FindPassword.fn.mobile = function () {

  };

  // 验证码验证  
  FindPassword.fn.code = function () {

  };





  window.FindPassword = FindPassword;

})(jQuery, window)