// pages/offical/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_info: [{
      icon: '../../images/coin.png',
      price: 5.07,
      count: 0,
minusStatus: 'disabled',
      countStatus: 'middle_text_disabled',
    }, {
      icon: '../../images/diamond.png',
      price: 7.03,
      count: 0,
minusStatus: 'disabled',
        countStatus: 'middle_text_disabled',
    }, {
      icon: '../../images/diamond.png',
      price: 13.04,
      count: 0,
minusStatus: 'disabled',
        countStatus: 'middle_text_disabled',
    }, {
      icon: '../../images/diamond.png',
      price: 6.35,
      count: 0,
 minusStatus: 'disabled',
 countStatus: 'middle_text_disabled',
    }],
    summary:0,
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


  sum_up: function () {
    var sum = 0;

    for (var i = 0; i < this.data.goods_info.length; i++) {
      sum += this.data.goods_info[i].price * this.data.goods_info[i].count;
    }

    sum = parseFloat(sum).toFixed(2)

    this.setData({
      summary: sum,
    })
  },
  /* 点击减号 */
  bindMinus: function (e) {
    console.log('减1', e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var num = this.data.goods_info[index].count;
    var current_price = parseFloat(this.data.goods_info[index].price).toFixed(2)
    // 如果大于1时，才可以减  
    if (num > 0) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 0 ? 'disabled' : 'normal';
    var count_status = num <= 0 ? 'middle_text_disabled' : 'middle_text';
    console.info(num, minusStatus);
    // 将数值与状态写回  
    var param = {};
    var count = "goods_info[" + index + "].count";
    var status = "goods_info[" + index + "].minusStatus";
    var countStatus = "goods_info[" + index + "].countStatus";
    var price = "goods_info[" + index + "].price";
    param[count] = num;
    param[status] = minusStatus;
    param[price] = current_price;
    param[countStatus] = count_status;
    console.info(param);
    this.setData(param);
    this.sum_up();
  },
  /* 点击加号 */
  bindPlus: function (e) {
    console.log('加上', e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var num = this.data.goods_info[index].count;
    var current_price = parseFloat(this.data.goods_info[index].price).toFixed(2)
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 0 ? 'disabled' : 'normal';
    var count_status = num <= 0 ? 'middle_text_disabled' : 'middle_text';
    console.info(num, minusStatus);
    // 将数值与状态写回  
    var param = {};
    var count = "goods_info[" + index + "].count";
    var status = "goods_info[" + index + "].minusStatus";
    var countStatus = "goods_info[" + index + "].countStatus";
    var price = "goods_info[" + index + "].price";
    param[count] = num;
    param[status] = minusStatus;
    param[price] = current_price;
    param[countStatus] = count_status;
    console.info(param);
    this.setData(param);

    this.sum_up();
  },

  pay: function(){
    var sum = this.data.summary;
    if(sum > 0){
      var timestamp = Date.parse(new Date());
      wx.requestPayment({
        "timeStamp": timestamp,
        "nonceStr": "",
        "package": "",
        "signType": "MD5",
        "paySign": "",
        "success": function (res) {

        },
        "fail": function (res) {
          wx.showModal({
            title: '支付失败',
            content: '',
            showCancel: false
          })

        },
        "complete":function(res){
          
        }

      })

    } else {
      wx.showModal({
        title: '先选再说',
        showCancel: false
      })
    }

  }

})