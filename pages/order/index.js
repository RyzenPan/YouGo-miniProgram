// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: '',
    tabData: [{
      id: 1,
      tabName: '全部'
    },
    {
      id: 2,
      tabName: '待付款'
    },
    {
      id: 3,
      tabName: '待发货'
      },
      {
        id: 4,
        tabName: '退款/退货'
      }
    ],
  },

  onMyTab(e) {
    this.setData({
      activeName: e.detail.currentTarget.dataset.index.tabName
    })
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

  }
})