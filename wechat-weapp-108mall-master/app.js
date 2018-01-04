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
              console.log('userInfo', res.userInfo)
              typeof cb == "function" && cb(that.globalData.userInfo)
              console.log('res', res)
              if(code) {
                console.log('that.globalData.code',code)
                wx.request({
                  //获取openid接口  
                  url: 'http://api.108fj.com/account/wechat',
                  data: {
                    code: code
                  },
                  method: 'POST',
                  success: function (res) {
                    console.log('登录108获取数据', res)
                  }
                })
                
                // var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + this.globalData.appid + '&secret=' + this.globalData.secret + '&js_code=' + code + '&grant_type=authorization_code'

                // wx.request({
                //   url: url,
                //   data:{
                //   },
                //   method:'POST',
                //   success: function (res) {
                //     console.log('登录108获取数据', res)
                //     var obj = {};
                //     obj.openid = res.data.openid;
                //     obj.expires_in = Date.now() + res.data.expires_in;
                //     //console.log(obj);  
                //     wx.setStorageSync('user', obj);//存储openid 
                //   }

                // })


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
    session_key:"",
    secert:"1fda04e998453b1e6cfdd5e51b5fc7dd",
    appid:"wx7c2a3d2b1d636cdc"
  }
})