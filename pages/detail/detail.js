// pages/detail/detail.js
import {
  getDetail,
  getRecommends,
  baseInfo,
  shopInfo
} from '../../serves/detail.js'

Page({
  data: {
    iid:null,
    topImages:[],//轮播图
    baseInfo:{},//商品信息
    shopInfo:{},//店铺信息
    detailInfo:{},//详情信息
    paramInfo:{},//参数信息
    commentInfo:{},//评价信息
    productList:[], //商品推荐,
    cartproduct:{} //添加到购物车的商品
  },
  onLoad: function (options) {
    //获取iid
    this.setData({
      iid:options.iid
    })
    //1.发送网络请求
    this.getDetail();
    this.getRecommends();
  },
  //获取页面的详情数据
  getDetail(){
    getDetail(this.data.iid).then(res => {
      let data = res.data.result
      //设置数据
      this.setData({
        topImages: data.itemInfo.topImages,
        baseInfo : new baseInfo(data.itemInfo, data.columns, data.shopInfo.services),
        shopInfo: new shopInfo(data.shopInfo),
        detailInfo: data.detailInfo,
        paramInfo: data.itemParams,
        commentInfo: data.rate.list[0]
      })
    })
  },
  //获取推荐的数据
  getRecommends() {
    getRecommends().then(res=>{
      this.setData({
        productList : res.data.data.list 
      })
    })
  },
  //添加到购物车
  addcart(){
    //1.获取商品信息
    let obj={}
    obj.iid = this.data.iid;
    obj.img = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.price = this.data.baseInfo.cprice;
    obj.desc = this.data.baseInfo.desc;
    obj.ischecked = false;

    //2.添加到缓存中
    //2.1 获取productList数据
    let cartList = wx.getStorageSync('cartList') || []
    
    //2.2 判断商品是否存在于购物车中
    let index = cartList.findIndex(function(item){
      return item.iid == obj.iid
    })
    //2.3 存在，就只是加1；不存在就push
    if (index === -1){
      obj.num = 1;
      cartList.push(obj);
    }else{
      cartList[index].num++;
    }

    //2.4 把list加入缓存中
    wx.setStorageSync("cartList", cartList)
    
    // 3.加入成功提示
    wx.showToast({
      title: '加入购物车成功',
      icon:'success',
      mask:true
    })
    
  },
  onReady: function () {

  },
  onShow: function () {

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