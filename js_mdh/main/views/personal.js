/*
* @Author: maidehao
* @Date:   2016-04-12 16:11:46
* @Last Modified by:   maidehao
* @Last Modified time: 2016-04-14 17:16:38
*/

'use strict';

$(function() {
    // 收藏列表
  $('.personal-collect ul li').hover(function() {
    $(this).find('.top').stop().fadeIn(400);
  }, function() {
    $(this).find('.top').stop().fadeOut(400);
  });

  // 安全中心导航
  $('.personal-nav li').click(function(event) {
  	$(this).find('.innav').stop().slideToggle()
  });
  // 个人收藏列表初始化
  $('.personal-collect ul li:nth-child(3n)').css({
    'margin-right': 0
  });

  // 我的信息鼠标悬停
  $('.personal-wx a').hover(function(e) {
      $(this).find('img').attr('src', '../../images_mdh/icon/personal-wx1.1.png');
  }, function(e) {
    $(this).find('img').attr('src', '../../images_mdh/icon/personal-wx.png');
  });

   $('.personal-service a').eq(0).hover(function(e) {
      $(this).find('img').attr('src', '../../images_mdh/icon/personal-about1.1.png');
  }, function(e) {
    $(this).find('img').attr('src', '../../images_mdh/icon/personal-about1.png');
  });

   $('.personal-service a').eq(1).hover(function(e) {
      $(this).find('img').attr('src', '../../images_mdh/icon/personal-about2.2.png');
  }, function(e) {
    $(this).find('img').attr('src', '../../images_mdh/icon/personal-about2.png');
  });

   $('.personal-service a').eq(2).hover(function(e) {
      $(this).find('img').attr('src', '../../images_mdh/icon/personal-about3.3.png');
  }, function(e) {
    $(this).find('img').attr('src', '../../images_mdh/icon/personal-about3.png');
  });

   $('.personal-service a').eq(3).hover(function(e) {
      $(this).find('img').attr('src', '../../images_mdh/icon/personal-about4.4.png');
  }, function(e) {
    $(this).find('img').attr('src', '../../images_mdh/icon/personal-about4.png');
  });
});