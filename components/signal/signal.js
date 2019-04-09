// components/signal/signal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    errorPrompt: {
      type: String,
      value: '',
      observer: 'occurred'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hide: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 两秒清除提示
    occurred() {
      if (this.data.errorPrompt != '') {
        this.setData({
          hide: false
        })
        setTimeout(this.hideErrorPrompt, 2000, this);
      }
    },

    // 隐藏错误信息
    hideErrorPrompt(that) {
      that.setData({
        hide: true,
        errorPrompt: null
      })
    }
    
  }
})
