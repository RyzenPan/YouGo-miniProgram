// components/myTab/myTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabData:{
      type:Array,
      value:[]
    }
  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      this.setData({
        activeName: this.data.tabData[0].tabName
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeName:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemActive(e) {
      this.triggerEvent('mytap', e);
      this.setData({
        activeName: e.currentTarget.dataset.index.tabName
      })
      console.log(this.data.activeName)
    }
  }
})
