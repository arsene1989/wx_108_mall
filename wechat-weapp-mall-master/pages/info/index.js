var app = getApp()
Page({
  data: {
    userInfo: {},
    service_phone:'0599-2321108',
    email:'yilingba_108@163.com',
    coins:60,
    diamond:289
  },

  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '0599-2321108', 
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})