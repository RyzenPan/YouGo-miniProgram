// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKeyword:'',
    searchInfo:[]
  },

  keyword(e){
    this.setData({
      searchKeyword:e.detail.value
    })
  },

  searchGoods(){
    this.getSearchInfo(this.data.searchKeyword)
  },

  getSearchInfo(key){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/goods/search',
      data:{
        query:key
      },
      success:(res)=>{
        console.log(res)
        this.setData({
          searchInfo:res.data.message.goods
        })
      }
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