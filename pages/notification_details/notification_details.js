// pages/notification_details/notification_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    content: '',
    time: '',
    reply: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name,
      content: options.content,
      time: options.time
    })
  },

  //点击回复事件
  onSRC(){
    this.setData({
      reply: true
    })
  }
})