/**
 * 购物车页面js
 */
;(function ($, window) {

  // 购物车
  function ShoppingCart (options) {
    if (!(this instanceof ShoppingCart)) return new ShoppingCart(options);
    this.init.apply(this, arguments);
  };

  ShoppingCart.fn = ShoppingCart.prototype;
  // 初始化
  ShoppingCart.fn.init = function (options) {
    this.options = options;
    this.documentClick();
  };

  //绑定事件
  ShoppingCart.fn.documentClick = function () {
    // 点击选中所有还是不选中所有
    $('[data-tag="selectAll"]').bind('click', $.proxy(this.selectAllClick, this));
    // 点击选中还是不选中
    $('[data-tag="select"]').bind('click', $.proxy(this.selectClick, this));
    // 减事件
    $('[data-tag="minus"]').bind('click', $.proxy(this.minusClick, this));
    // 加事件
    $('[data-tag="plus"]').bind('click', $.proxy(this.plusClick, this));

    // 删除产品
    $('[data-tag="del"]').bind('click', $.proxy(this.delClick, this));

    // 提交表单
    $('[data-tag="submit"]').bind('click', $.proxy(this.submitClick, this));
  };

  // 点击选中所有还是不选中所有
  ShoppingCart.fn.selectAllClick = function (e) {
    var checked = $(e.target).is(':checked');
    if (checked)
      $('[data-data="form"]').find('[data-tag="select"]').attr({checked: 'true'});
    else 
      $('[data-data="form"]').find('[data-tag="select"]:checked').removeAttr('checked');
  };
  //点击选中还是不选中
  ShoppingCart.fn.selectClick = function (e) {
    var checked = $(e.target).is(':checked');
  };
  // 减事件
  ShoppingCart.fn.minusClick = function (e) {
    var $number = $(e.target).siblings('[data-tag="count"]');
    var num = parseInt($number.html());
    if (num >= 2 ) $number.html(--num);
  };
  // 加事件
  ShoppingCart.fn.plusClick = function (e) {
    var $number = $(e.target).siblings('[data-tag="count"]');
    var num = parseInt($number.html());
    if (num > 0 ) $number.html(++num);
  };
  // 删除产品
  ShoppingCart.fn.delClick = function (e) {
    $(e.target).parents('tr').remove();
  };
  // 提交表单
  ShoppingCart.fn.submitClick = function (e) {
    var $form = $('[data-data="form"]')
    var len = $form.find('[data-tag="select"]:checked').length;
    if (len)
      $form.submit();
    else
      alert('请选择产品提交');
  };

  window.ShoppingCart = ShoppingCart;

})(jQuery, window);