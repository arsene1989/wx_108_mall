//app.js
App({

  onLaunch: function () {
    console.log('App Launch')
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs) 
    
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          console.log('res', res)
          var code = res.code
          console.log('code', code)
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
              console.log('res', res)
              if(code) {
                wx.request({
                  //获取openid接口  
                  url: 'https://api.weixin.qq.com/sns/jscode2session',
                  data: {
                    appid: 'wxc8f32ff46c0f44a7',
                    secret: '1bf6489da0fae7f171c824e21f04bb99',
                    js_code: code,
                    grant_type: 'authorization_code'
                  },
                  method: 'GET',
                  success: function (res) {
                    console.log('res', res)
                    wx.showToast({
                      title: 'res', res,
                    })

                    var OPEN_ID = res.data.openid;//获取到的openid  
                    var SESSION_KEY = res.data.session_key;//获取到session_key
                    console.log('OPEN_ID', OPEN_ID)
                    console.log('SESSION_KEY', SESSION_KEY)
                  }
                })
              } else {
                wx.showToast({
                  title: 'code不存在',
                })
              }
            }
          })
        }
      })
    }
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },

  globalData:{
    userInfo:null,
    coin_price:1,
    coin_count:18,
    diamond_price:1.2,
    diamond_count:88,
    store_level:0,
    telephone: "",
    name: "",
    cert: "",
    bank_account: "",
    bank_open:"",
    money:95.27,
    open_id:"",
    session_key:""
  }
})