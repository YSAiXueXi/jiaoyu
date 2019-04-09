const arrayUtil = require("../../../utils/arrayUtil.js")
import { data } from "../../../utils/data.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "发通知",
    receiveObj: '',
    receiveObjCount: '',
    wordCount: 0, //数字统计
    timedSend: false, //是否按时发送
    sendSelf: false, //是否同时发送给自己
    signList: [], //落款数据
    sign: "",
    showSign: false //显示落款组件
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    let signList = [];
    data.getRoleTeacherList("13435200189").forEach(item => {
      let name = item.getName();
      signList.push(name);
      signList.push(name.charAt(0) + "老师");
      signList.push(name + "老师");
    })
    signList.push("无落款");
    this.setData({
      sign:signList[0],
      signList: signList
    })
    wx.hideLoading();
  },

   /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    wx.getStorage({
      key: 'sendNotificationData',
      success: (result) => {
        that.setData(result.data);
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    let data = this.data;
    wx.setStorage({
      key: 'sendNotificationData',
      data: data
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.removeStorage({
      key: 'sendNotificationData'
    })
  },


  //跳转选择接受对象页面
  showSeleObj(){ 
    wx.navigateTo({
      url: '/pages/client_teacher/selected_receive/receive'
    })
  },

  // 数字统计，数据绑定
  contentInput(e){
    let wordCount = e.detail.cursor;
    this.setData({
      wordCount: wordCount
    })
  },

  //是否按时发送
  timedSend(){
    let timedSend = this.data.timedSend;
    this.setData({
      timedSend: !timedSend
    })
  },

  sendSelf(){
    let sendSelf = this.data.sendSelf;
    this.setData({
      sendSelf: !sendSelf
    })
  },

  // 显示落款组件
  showSign(){
    this.setData({
      showSign: true
    })
  },
  // 隐藏落款组件
  hideSign(){
    this.setData({
      showSign: false
    })
  },

  // 更改落款选择
  chanSele(seleSign){
    let signature = seleSign.detail;
    this.setData({
      sign: signature,
      showSign: false
    })
  }
})