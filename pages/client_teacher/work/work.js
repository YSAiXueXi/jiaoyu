// pages/client_teacher/work/work.js
import { data } from '../../../utils/data.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    workList: [],
    showType: 1 //已发布作业： 0， 发布作业 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      workList: data.getWorkList(1,99)
    })
  },
  //跳转布置作业页面
  homework(){
    wx.navigateTo({
      url: '/pages/client_teacher/homework/homework'
    })
  },

  //选择同通知类型
  selected(e) {
    const showType = e.currentTarget.dataset.text;
    let receive = this.data.receive;
    this.setData({
      showType: showType
    })
  }
})