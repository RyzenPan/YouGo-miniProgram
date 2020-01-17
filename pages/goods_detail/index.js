// pages/goods_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetailData:[],
    goods_id:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.goods_id){
      this.setData({
        goods_id: options.goods_id
      })
    }
    this.getGoodsDetail()
  },

  getGoodsDetail(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/goods/detail?goods_id=' + this.data.goods_id,
      success:(res)=>{
        // console.log(res)
        this.setData({
          goodsDetailData:res.data.message
        })
      }
    })
  },

  handlerCartAdd(){
    let cart = wx.getStorageSync("cart") || []
    let index = cart.findIndex(v => {
      return v.goods_id === this.data.goodsDetailData.goods_id
    })

    if(index === -1){
      // 不存在
      this.data.goodsDetailData.num = 1;
      cart.push(this.data.goodsDetailData)
    } else {
      // 已经存在
      cart[index].num ++
    }

    wx.setStorageSync("cart", cart)
    wx.showToast({
      title: '添加成功',
      icon:"success",
      mast:true
    })
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