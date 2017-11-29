var app = getApp()
Page( {
  data: {
    userInfo: {},
    coin_count:0,
    diamond_count:0,
    store_level:0,
  },

  onLoad: function() {
    
  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        coin_count: app.globalData.coin_count,
        diamond_count: app.globalData.diamond_count,
        store_level: app.globalData.store_level,
      })
    })
  },

  to_about_us: function() {
    wx.navigateTo({
      url: '../info/index',
    })
  },

  to_person: function () {
    wx.navigateTo({
      url: '../person/index',
    })
  },

  to_download: function () {
    
    wx.navigateTo({
      url: '../download/index',
    })
  },

  to_money: function () {

    wx.navigateTo({
      url: '../money/index',
    })
  },


})