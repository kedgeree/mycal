// pages/today/today.js
import calendarData from '../../resources/data.js'
import yijiGroup from '../../resources/yiji.js'
import G from '../../utils/g.date.js'

const weekDayZh = ['一','二','三','四','五','六','日']
const accDay = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
Page({
  //只有2018年的数据,所以只算2018年
  /**
   * 页面的初始数据
   */
  data: {
    chineseYear: '',
    chineseDate: '',
    gz:'',
    year: '',
    month: '',
    day: '',
    weekday: '',
    percent: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var weekday = date.getDay();

    var chineseYear = '戊戌年 【狗年】';
    if(month + 1 == 1 || (month + 1 == 2 &&  day < 16)) {
      chineseYear = '丁酉年 【鸡年】';
    }

    var chineseDate = calendarData[month].chineseDate[day - 1]
    var yiji = calendarData[month].yiji[day - 1]

    var gz = G.date.toGz(year, month + 1, day);

    var slappedDays = accDay[month] + day;
    
    this.setData({ 
      chineseYear: chineseYear, 
      chineseDate: chineseDate,
      yiji: yiji, 
      gz: gz,
      year: year,
      month: month + 1,
      day: day,
      weekday: weekDayZh[weekday - 1] ,
      slappedDays: slappedDays,
      percent: (slappedDays / 365).toFixed(2)})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})