var app = getApp()
Page({
    data: {
      price_info: [{
        icon: '../../images/coin.png',
        price: 0
      }, {
        icon: '../../images/diamond.png',
        price: 0
      }],
      coin_icon: '../../images/coin.png',
      coin_price:0,
      diamond_icon: '../../images/diamond.png',
      diamond_price:0
    },
    onLoad: function(options) {
      var current_coin_price = app.globalData.coin_price;
      var current_diamond_price = app.globalData.diamond_price;
      var json = [{
        icon: '../../images/coin.png',
        price: current_coin_price
      }, {
        icon: '../../images/diamond.png',
        price: current_diamond_price
      }];
      this.setData({
        price_info :json,
        coin_price: parseFloat(current_coin_price).toFixed(2),
        diamond_price: parseFloat(current_diamond_price).toFixed(2),
      })
      
    },

    sumbit_price :function(e) {
      var coin_price = e.detail.value.coin_price;
      var diamond_price = e.detail.value.diamond_price;
      if (coin_price.length == 0 || diamond_price.length == 0 ){
        wx.showModal({
          title: '金币或钻石的价格不能为空',
          content: '',
          showCancel: false
        })
      } else {
        this.setData({
          coin_price: parseFloat(coin_price).toFixed(2),
          diamond_price: parseFloat(diamond_price).toFixed(2)
        })
        app.globalData.coin_price = parseFloat(coin_price).toFixed(2)
        app.globalData.diamond_price = parseFloat(diamond_price).toFixed(2)

        console.debug('coin price',app.globalData.coin_price)
        console.debug('diamond price', app.globalData.diamond_price)

        wx.showModal({
          title: '设置商品价格成功',
          content: '',
          showCancel: false,
          success: function () {
            wx.navigateBack();   //返回上一个页面
          }
        })

      }

    }

})