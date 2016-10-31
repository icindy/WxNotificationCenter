/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/WxNotificationCenter
 * 
 * for: 微信小程序通知广播模式类,降低小程序之间的耦合度
 * detail : http://weappdev.com/t/wxnotificationcenter/233
 */
//index.js
//获取应用实例
var WxNotificationCenter = require("../../WxNotificationCenter/WxNotificationCenter.js");
var app = getApp()
Page({
  data: {
    noticeText:"这里将显示来自不同通知的文字"
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    WxNotificationCenter.addNotification("testNotificationName",that.testNotificationFn,that)
    WxNotificationCenter.addNotification("testNotificationItem1Name",that.testNotificationFromItem1Fn,that)
    WxNotificationCenter.addNotification("testNotificationItem2Name",that.testNotificationFromItem2Fn,that)
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  testNotificationFn: function(){
    console.log("本页通知");
    var that = this
    that.setData({
        noticeText:"你从本页改变了我"
    })
  },
  //这是一个带参数的例子，info为字符串
  testNotificationFromItem1Fn: function(info){//这是也给带参数的例子，info为字符串
      console.log("item1通知");
      var that = this
      that.setData({
          noticeText:info
      })
  },
  //这是一个带参数的例子，info为对象
  testNotificationFromItem2Fn: function(info){//这是也给带参数的例子，info为字符串
      console.log("item2通知");
      var that = this
      that.setData({
          noticeText:info.text
      })
  },
  postNotice: function(){
    WxNotificationCenter.postNotificationName("testNotificationName");
  },
  goItem1: function (){
    wx.navigateTo({
      url: '../nav/item1/item1'
    })
  },
  postTabNotice: function(){
    WxNotificationCenter.postNotificationName("testTabNotificationName");
  }
})
