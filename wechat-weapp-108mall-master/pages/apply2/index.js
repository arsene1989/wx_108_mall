 var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    userInfo: {},

    telephone:"",
    name:"",
    cert:"",
    bank_account:""
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
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

  applyForTwo: function (e) {
    if (e.detail.value.name.length == 0 || e.detail.value.cert.length == 0 || e.detail.value.bank.length == 0 || e.detail.value.phone.length == 0 ) {
      wx.showModal({
        title: '请完善您的个人信息',
        content: '',
        showCancel:false
      })
    } else {
      wx.showModal({
        title: '恭喜你',
        content: '您已经成为壹零捌二级商店的店长',
        showCancel: false,
        success: function () {
                   app.globalData.telephone = e.detail.value.phone;
                  app.globalData.name =
                    e.detail.value.name;
                 app.globalData.cert =
                   e.detail.value.cert ;
                 app.globalData.bank_account = e.detail.value.bank;

          app.globalData.store_level = 2

          wx.navigateBack()
        },
        complete:function(){
          app.globalData.store_level = 2
          wx.navigateBack()
        }
        
      })
      this.setData({
        telephone: e.detail.value.phone,
        name: e.detail.value.name,
        cert: e.detail.value.cert,
        bank_account: e.detail.value.bank,
      })
    }
  }
})