Component({
  properties: {
    product:{
      type:Object,
      value:{}
    }
  },
  data: {

  },
  methods: {
    itemClick(e) {
      // 1.获取iid
      const iid = this.data.product.iid;
      //console.log(iid);
      // 2.跳转到对应的路径
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid,
      })
    }
  }
})
