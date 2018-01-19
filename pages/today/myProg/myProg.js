// pages/today/myProg/myProg.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    percent: {
      type: Number,
      value: 0,
      observer: '_percentChange'
    },
    text: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    width: 0.5 * 700
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _percentChange: function(newVal, oldVal){
      this.setData({
        width: newVal * 700
      })
    }
  }
})
