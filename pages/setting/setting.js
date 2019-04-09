// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pwLock: false, //密码锁设置
    draftSendNotiReserved: true, //草稿想发送通知后仍然保留
    msgNoti: true, //消息通知
    accountNumber: '' //登录用户
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getStorage({
      key: 'account',
      success: function(res) {
        that.setData({
          accountNumber: res.data.accountNumber
        })
      },
    })
  },

  //消息通知修改
  msgNoti(){
    let msgNoti = this.data.msgNoti;
    this.setData({
      msgNoti: !msgNoti
    })
  },

  //草稿想通知发送后仍保留修改
  draftSendNotiReserved(){
    let draftSendNotiReserved = this.data.draftSendNotiReserved;
    this.setData({
      draftSendNotiReserved: !draftSendNotiReserved
    })
  },

  //密码锁设置
  pwLock(){
    let pwLock = this.data.pwLock;
    this.setData({
      pwLock: !pwLock
    })
  },

  // 退出登录
  loginout(){
    wx.removeStorage({
      key: 'userInfo'
    })
    wx.removeStorage({
      key: 'account'
    })
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})