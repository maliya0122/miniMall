// pages/cart/cart.js
Page({
  data: {
    cartList:[],
    allchecked:false,
    totalprice:10,
    totalnum:110
  },
  onShow: function () {
    //获取购物车list数据
    let cartList = wx.getStorageSync('cartList') || []
    this.setData({
      cartList
    })
    //底部状态更新
    this.bottom()
  },
  //点击商品的checkbox，切换选中/不选中状态
  itemclick(e){
    //获取选中商品的iid
    const iid  = e.detail.iid;
    //获取购物车list数据
    let cartList = wx.getStorageSync('cartList') || []
    //获取index
    let index = cartList.findIndex(item=>{
      return item.iid == iid;
    })
    //修改状态值
    cartList[index].ischecked = !cartList[index].ischecked
    //设置data的cartList
    this.setData({
      cartList
    })
    //存放入缓存
    wx.setStorageSync("cartList", cartList)

    //底部状态更新
    this.bottom()
    
  },
  //底部bottombar的全选按钮，price，num的计算
  bottom(){
    //获取购物车list数据
    let cartList = wx.getStorageSync('cartList') || []
    //判断全选状态allchecked
    if(cartList.length>0){
      let isall = cartList.every((item) => {
        return item.ischecked == true
      })
      this.setData({
        allchecked: isall
      })
    }else{
      this.setData({
        allchecked: false
      })
    }
    

    //计算底部的pricce和num
    let newlist = []
    cartList.forEach(item => {
      if (item.ischecked) {
        newlist.push(item)
      }
    })

    let price = newlist.reduce(function (prev, cur, index, arr) {
      return prev + cur.price * cur.num
    }, 0)

    this.setData({
      totalnum: newlist.length,
      totalprice: price
    })
  },
  //全选和全不选
  bclick(e){
    let allc = e.detail.allchecked;
    this.setData({
      allchecked: !allc
    })
    //获取购物车list数据
    let cartList = wx.getStorageSync('cartList') || []
    //点击之前是 未选中状态false
    if (!allc){
      //现在就变成 全部选中状态
      cartList.forEach((item)=>{
        item.ischecked = true
      })
    }else{
      //现在就变成 全部未选中状态
      cartList.forEach((item) => {
        item.ischecked = false
      })
    }

    this.setData({
      cartList
    })
    wx.setStorageSync("cartList", cartList)
    this.bottom()
    
  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})