// pages/home/home.js
import {
  getMultidata,
  getProduct
} from '../../serves/home.js'

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['热门', '精选', '流行'],
    currentType: "pop",
    goods: {
      'pop': {
        page: 1,
        list: []
      },
      'sell': {
        page: 1,
        list: []
      },
      'new': {
        page: 1,
        list: []
      }
    },
    topdistance:1000,
    topPosition: 0,
    tabControlTop: 0,
    showBackTop: false,
    showTabControl: false
  },
  onLoad: function(options) {
    //1.发送网络请求
    this.getMultidata();
    this.getProduct('pop',1);
    this.getProduct('new', 1);
    this.getProduct('sell', 1);
  },
  tabclick(event) {
    const index = event.detail.index;
    switch (index) {
      case 0:
        this.setData({
          currentType: 'new'
        })
        break;
      case 1:
        this.setData({
          currentType: 'sell'
        })
        break;
      case 2:
        this.setData({
          currentType: 'pop'
        })
        break;
    }
    console.log(this.selectComponent('.tabControl-center').data);
    //让两个组件保持一致
    //this.selectComponent(".tabControl-top").setCurrentIndex(event.detail.index)
    //this.selectComponent(".tabControl-center").setCurrentIndex(event.detail.index)
  },
  getMultidata() {
    getMultidata().then(res => {
      const banners = res.data.data.banner.list.map(item => {
        return item.image
      })
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners,
        recommends
      })
    })
  },
  getProduct(type) {
    //取出页码数据
    const page = this.data.goods[type].page;

    getProduct(type,page).then(res=>{
      //1.取出数据
      const oldlist = res.data.data.list;

      //2.临时存储数据
      const goods = this.data.goods;
      goods[type].list.push(...oldlist);
      goods[type].page += 1;

      //3.存储数据在goods
      this.setData({
        goods
      })
    })
  },
  onReachBottom(){
    this.getProduct(this.data.currentType)
  },
  onPageScroll(options){
    const top= options.scrollTop;
    
    this.setData({
      showBackTop: top > this.data.topdistance
    })

    wx.createSelectorQuery().select('.tabControl-center').boundingClientRect((rect) => {
      const show = rect.top > 0
      this.setData({
        showTabControl: !show
      })
    }).exec()
  },
  imgload(){
    wx.createSelectorQuery().select('.tabControl-center').boundingClientRect((rect) => {
      this.setData({
        tabControlTop: rect.top
      })
    }).exec()
  },
  topclick() {
    wx.pageScrollTo({
      scrollTop: 0
    })
    this.setData({
      showBackTop: false
    })
  }
})