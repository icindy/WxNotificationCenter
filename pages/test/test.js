
var WxNotificationCenter = require("../../WxNotificationCenter/WxNotificationCenter.js");
Page({
  data:{
    text: "这里还没有接到通知的文字"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    WxNotificationCenter.addNotification("testTabNotificationName",that.testNotificationFn,that);
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
  },
  testNotificationFn:function (){
    var that = this
    that.setData({
        text:"接到来自主页通知，我变........"
    })
  },
  removeNotice: function(){
    var that = this
    WxNotificationCenter.removeNotification("testTabNotificationName",that)
    that.setData({
        text:"你已经移除了通知，点击root页面的通知不会生效"
    })
  },
  addNotice: function(){
    var that = this
    WxNotificationCenter.addNotification("testTabNotificationName",that.testNotificationFn,that)
    that.setData({
        text:"你已经添加了通知，点击root页面的通知会生效"
    })
  }
})