# WxNotificationCenter
WxNotificationCenter - 微信小程序通知广播模式类,降低小程序开发的耦合度

## 信息

来自[微信小程序开发论坛](http://weappdev.com/) [http://weappdev.com/](http://weappdev.com/)
垂直微信小程序开发论坛

## 版本信息

`version 0.1`

## 使用

 1. copy 文件 `WxNotificationCenter.js` 到你的开发目录中

 2. 引入 `WxNotificationCenter.js` 在你需要的`js`中

  ```
  var WxNotificationCenter = require("../../WxNotificationCenter/WxNotificationCenter.js");
  ```

 3. 注册通知

  ```
  // 最好在onLoad中进行
/**
 * addNotification
 * 注册通知对象方法
 * 
 * 参数:
 * name： 注册名，一般let在公共类中
 * selector： 对应的通知方法，接受到通知后进行的动作
 * observer: 注册对象，指Page对象，可选，不填写的话在remove中会失效
 */

  var that = this
  WxNotificationCenter.addNotification("testNotificationName",that.testNotificationFn,that)
  ```

 4. 发送通知

  ```
  WxNotificationCenter.postNotificationName("testNotificationName");
  ```

 5. 移除通知

  ```
  // 移除通知在本也完成
  WxNotificationCenter.removeNotification("testTabNotificationName",that)
  ```

## 特性

 * 支持注册、发送、移除通知
 * 支持传参,字典等 

## 源码分析

 * `var __notices = [];`

 > 存放通知数组

 * `addNotification` 注册方法

	```
	 * addNotification
	 * 注册通知对象方法
	 * 
	 * 参数:
	 * name： 注册名，一般let在公共类中
	 * selector： 对应的通知方法，接受到通知后进行的动作
	 * observer: 注册对象，指Page对象
	 */

	```

 * `postNotificationName` 发送方法

   ```
   /**
	 * postNotificationName
	 * 发送通知方法
	 * 
	 * 参数:
	 * name: 已经注册了的通知
	 * info: 携带的参数
	 */

	function postNotificationName(name, info)
   ```

 * `removeNotification` 移除方法

	```
	/**
	 * removeNotification
	 * 移除通知方法
	 * 
	 * 参数:
	 * name: 已经注册了的通知
	 * observer: 移除的通知所在的Page对象
	 */

	function removeNotification(name,observer)
	```

## 拓展阅读

 * 什么叫做通知广播模式
 > 本类借鉴iOS开发中的NSNotificationCenter的消息模式进行开发

 可阅读: [细说KVO & KVC & NSNotificationCenter那些事](http://www.jianshu.com/p/8f83f592a354)


 * 通知广播模式的使用场景
 
  + 多级页面传值


## 来源

来自[微信小程序开发论坛](http://weappdev.com/) [http://weappdev.com/](http://weappdev.com/)
垂直微信小程序开发论坛


