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
var WxNotificationCenter = require("../../../WxNotificationCenter/WxNotificationCenter.js");
Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
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
  postNotice: function(){
      WxNotificationCenter.postNotificationName("testNotificationItem2Name",{text:"我是item2通过携带参数发来的文字,我是从对象中取得的"});
      var that = this
      that.setData({
          info:"通知成功,不信返回root页面看看"
      })
  }
})