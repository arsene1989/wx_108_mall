var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telephone: "",
    name: "",
    cert: "",
    bank_account: "",
    bank_open:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    that.setData({
      telephone: app.globalData.telephone,
      name: app.globalData.name,
      bank_account: app.globalData.bank_account,
      cert: app.globalData.cert,
      bank_open: app.globalData.bank_open,
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

  save_person_info: function(e) {
    if (e.detail.value.name.length == 0 || e.detail.value.cert.length == 0 || e.detail.value.bank.length == 0 || e.detail.value.phone.length == 0 || e.datail.value.open.length == 0) {
      wx.showModal({
        title: '请完善您的个人信息',
        content: '',
        showCancel: false
      })
    } else {
      wx.showModal({
        title: '设置成功',
        content: '',
        showCancel: false,
        success: function () {
          app.globalData.telephone = e.detail.value.phone;
          app.globalData.name =
            e.detail.value.name;
          app.globalData.cert =
            e.detail.value.cert;
          app.globalData.bank_account = e.detail.value.bank;
        },
        complete: function () {
          wx.navigateBack()
        }

      })
      this.setData({
        telephone: e.detail.value.phone,
        name: e.detail.value.name,
        cert: e.detail.value.cert,
        bank_account: e.detail.value.bank,
        bank_open:e.detail.value.open
      })
    }
  }
  
})