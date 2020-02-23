// pages/category/category.js
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from '../../serves/category.js'

Page({
  data: {
    Category:[],
    Subcategory:[],
    maitKey:0,
    miniWallkey: 0,
    recommendlist:[]
  },
  onLoad: function (options) {
    this.getCategory()
  },
  //获取左边的分类菜单
  getCategory(){
    getCategory().then(res=>{
      this.setData({
        Category: res.data.data.category.list,
        maitKey: res.data.data.category.list[0].maitKey,
        miniWallkey: res.data.data.category.list[0].miniWallkey
      })
      this.getSubcategory(res.data.data.category.list[0].maitKey)
      this.getrecommend(res.data.data.category.list[0].miniWallkey)
    })
  },
  //获取右边的菜单
  getSubcategory(data){
    getSubcategory(data).then(res=>{
      this.setData({
        Subcategory: res.data.data.list
      })
    })
  },
  //获取推荐的信息
  getrecommend(data){
    getCategoryDetail(data,'pop').then(res=>{
      //console.log(res)
      this.setData({
        recommendlist:res.data
      })
    })
  },
  //获取点击的item
  currentItem(event){
    //console.log(event.detail)
    this.setData({
      maitKey: event.detail.maitKey,
      miniWallkey: event.detail.miniWallkey
    })
    this.getSubcategory(event.detail.maitKey)
    this.getrecommend(event.detail.miniWallkey)
  },
  onReady: function () {
    
  },
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