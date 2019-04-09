// pages/client_teacher/selected_receive/receive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 跳转“发送给全班”页面
  sendClass(){
    wx.navigateTo({
      url: '/pages/client_teacher/send_class/send_class',
    })
  },

  //跳转发送个人页面
  sendIndividual(e) {
    wx.navigateTo({
      url: "/pages/client_teacher/send_individual/individual?title=" + e.currentTarget.dataset.text
    })
  }
})