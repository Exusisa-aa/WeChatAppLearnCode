// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todayWeather:{},
    weekWeather:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getDefaultWeather()
  },
  getDefaultWeather(){
    const app = getApp()
    if(app.getKey()){
      wx.request({
        url: `https://hmajax.itheima.net/api/weather?city=${app.getKey()}`,
        method: 'GET',
        success: (res) => {
          this.setData({
            todayWeather:res.data.data,
            weekWeather:res.data.data.dayForecast
          })
        },
    })
    }else{
      wx.request({
        url: `https://hmajax.itheima.net/api/weather?city=110100`,
        method: 'GET',
        success: (res) => {
          this.setData({
            todayWeather:res.data.data,
            weekWeather:res.data.data.dayForecast
          })
        },
    })
    } 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getDefaultWeather()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})