var app = getApp()
Page({
    data: {
      userInfo: {},
      store_level: 0,
      coin_count:0,
      diamond_count:0,
      rule:'《王者荣耀》是腾讯第一5V5英雄公平对战手游，于10月28日开启不限号测试！5V5王者峡谷（含迷雾模式）、5V5深渊大乱斗、以及3V3、1V1等多样模式一键体验，热血竞技尽享快感！海量英雄随心选择，精妙配合默契作战！10秒实时跨区匹配，与好友组队登顶最强王者！操作简单易上手，一血、五杀、超神，极致还原经典体验！实力操作公平对战，回归MOBA初心！'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function() {

        var that = this;

        app.getUserInfo(function (userInfo) {
          //更新数据
          that.setData({
            userInfo: userInfo,
            store_level: app.globalData.store_level,
            coin_count: app.globalData.coin_count,
            diamond_count: app.globalData.diamond_count,
          })
        })

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
      this.setData({
        store_level: app.globalData.store_level,
      })
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

    },

    to_offical: function () {
      wx.navigateTo({
        url: '../offical/index',
      })
    },

    to_apply_one: function () {
      wx.navigateTo({
        url: '../apply1/index',
      })
    },

    to_apply_two: function () {
      wx.navigateTo({
        url: '../apply2/index',
      })
    },

    to_mystore: function () {
      wx.navigateTo({
        url: '../mystore/index',
      })
    },

    to_money: function () {
      wx.navigateTo({
        url: '../money/index',
      })
    },


})