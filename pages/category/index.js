// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList:[],
    cateContentList:[],
    cateIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCateList()
  },

  getCateList(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/categories',
      success:res=>{
        console.log(res)
        this.setData({
          cateList:res.data.message
        })
        this.setData({
          cateContentList: this.data.cateList[0].children
        })
      }
    })
  },

  chooseCate(e){
    this.setData({
      cateContentList: this.data.cateList[e.currentTarget.dataset.index].children,
      cateIndex: e.currentTarget.dataset.index
    })
    console.log(this.data.cateList[e.currentTarget.dataset.index])
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