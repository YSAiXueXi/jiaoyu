// pages/client_teacher/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "反馈要求",
    claim: ["无要求", "要求家长队本土作业进行语音回复"],
    selected: 0
  },
  
  // 勾选要求
  selected(e) {
    let index = e.currentTarget.dataset.text;
    this.setData({
      selected: index
    })
  },

  // 缓存数据，返回上一层
  btn() {
    const claim = String(this.data.claim[this.data.selected]);
    wx.getStorage({
      key: 'homeworkData',
      success:function(res){
        let homeworkData = res.data;
        homeworkData.chooseClaim = claim;
        wx.setStorage({
          key: 'homeworkData',
          data: homeworkData
        })
        wx.navigateBack({
          delta: 1
        })
      }
    })
  }
})