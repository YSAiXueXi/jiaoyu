// pages/tackphoto/tackphoto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempImagePath: '',
    tempFilePaths: []
  },


   // 阻止打开摄像头触发事件
   
  preventOpeningCamera() {
    console.log("阻止打开摄像头");
  },

  //拍照事件
  takePhoto(){
    let that = this;
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'hign',
      success(res) {
        that.setData({
          tempImagePath: res.tempImagePath
        })
      },
      fail(err){
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },
  
  // 相册选图
  openAlbum(){
    let that = this;
    wx.chooseImage({
      count: 3,
      sourceType: 'album',
      success: function(res) {
        that.setData({
          tempFilePaths: res.tempFilePaths
        })
      },
    })
  },

  // 完成，携带数据返回
  onComplete(){
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.onDelayedEvent(this.data.tempImagePath);
    wx.navigateBack({
      delta: 1
    })
  }
})