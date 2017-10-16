// pages/mystore/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    goods_info:[{
      icon:'../../images/mystore_coin.png',
      count:0,
      price:0
    },{
      icon:'../../images/mystore_diamond.png',
      count:0,
      price:0
    }],
    transactions:[{
      date:'2017年8月15日13时03分',
      coin:7,
      diamond:3,
      buyer:'王尼玛',
      amount:9
    }, {
      date:'2017年8月15日13时03分',
      coin: 7,
      diamond: 3,
      buyer: '李尼玛',
      amount:9
     }, {
      date: '2017年8月15日13时03分',
      coin: 7,
      diamond: 3,
      buyer: '毛尼玛',
      amount:90
    }, {
      date: '2017年8月15日13时03分',
      coin: 7,
      diamond: 3,
      buyer: '牛尼玛',
      amount:9527
    }, {
      date:'2017年8月15日13时03分',
      coin: 7,
      diamond: 38,
      buyer: '🐎',
      amount: 778
    }, {
      date: '2017年8月15日13时03分',
      coin: 7,
      diamond: 17,
      buyer: '哈哈😄',
      amount: 3
    }, {
      date: '2017年8月15日13时03分',
      coin: 9,
      diamond: 7,
      buyer: '🐶尼玛',
      amount: 3.24
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

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
    var that = this;

    app.getUserInfo(function (userInfo) {
      //更新数据
      var coin_price = 
      parseFloat(getApp().globalData.coin_price).toFixed(2);
      var coin_count = getApp().globalData.coin_count;
      var diamond_price = parseFloat(getApp().globalData.diamond_price).toFixed(2);
      var diamond_count = getApp().globalData.diamond_count;
      var goods_info = [{
        icon: '../../images/mystore_coin.png',
        count: coin_count,
        price: coin_price
      }, {
          icon: '../../images/mystore_diamond.png',
        count: diamond_count,
        price: diamond_price
      }];
      that.setData({
        userInfo: userInfo,
        goods_info: goods_info
      })
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

  /**
   * 设置商品价格
   */
  toPriceSetting: function() {
    var coin = this.data.goods_info[0].price;
    var diamond = this.data.goods_info[1].price;
    wx.navigateTo({
      url: '../price/index',
    })
  }
})