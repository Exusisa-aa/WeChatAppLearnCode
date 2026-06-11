// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    cityList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCityList("")
  },
  getCityList(value){
    wx.request({
      url: `https://hmajax.itheima.net/api/weather/city?city=${value}`,
      method: 'GET',
      success: (res) => {
        this.setData({
          cityList: res.data.data
        })
      },
  }) 
  },
  onSearchInput(e) {
    const value = e.detail.value;
    this.getCityList(value)
    this.setData({
      searchValue: value
    });
  },
  selectCity(e) {
    const app = getApp()
    const cityCode = e.currentTarget.dataset.city;
    app.setKey(cityCode)

    wx.switchTab({
      url: `/pages/index/index`
    })
    this.setData({
      searchValue: ''
    });
    this.getCityList(" ")
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