// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [],
    cid:'',
    reqObj: {
      pagenum: 1,
      pagesize: 10
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.cate_id) {
      this.setData({
        cid: options.cate_id
      })
    }

    if (options.query) {
      this.setData({
        keyword: options.query
      })
      this.data.reqObj.query = this.data.keyword
    }
    this.getGoodsList()
  },

  getGoodsList() {
    wx.showLoading({
      title: '数据加载中...',
    })

    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/goods/search',
      data: {
        cid: this.data.cid,
        ...this.data.reqObj
      } ,
      success: res => {
        console.log(res)
        this.setData({
          goodsList: res.data.message.goods
        })
        wx.hideLoading()
      }
    })
  },

  onPullDownRefresh: function() {
    this.setData({
      goodsList: []
    })
    this.getGoodsList()
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})