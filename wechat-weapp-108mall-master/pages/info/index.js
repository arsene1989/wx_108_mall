var app = getApp()
Page({
  data: {
    userInfo: {},
    wx:'wx_108',
    qq:'1918108108',
    email:'yilingba_108@163.com'
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

})