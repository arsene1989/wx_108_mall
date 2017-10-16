var app = getApp()
Page( {
  data: {
    discounts :[{
        content: '10钻',
        price: 10
      },{
        content: '100钻',
        price: 90
      },{
        content: '1000钻',
        price: 800
      }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  to_offical:function() {
      wx.navigateTo({
        url: '../offical/index',
      })
  },

  querySellerId: function (e) {
    var account = e.detail.value.account;
    if (account.length == 0){
      wx.showModal({
        title: '请输入对方的108账号',
        content: '',
        showCancel:false
      })

    } else {
      wx.navigateTo({
        url: '../seller/index?seller=' + account,
      })
    }
  }
})
