// pages/detail/childCpn/tabBar/tabBar.js
Component({
  properties: {

  },
  data: {
    icons:[
      {
        url: '/assets/images/detail/service.png',
        name: '客服'
      },
      {
        url: '/assets/images/detail/shop.png',
        name: '店铺'
      },
      {
        url: '/assets/images/detail/collect.png',
        name: '收藏'
      }
    ]
  },
  methods: {
    addcart(){
      this.triggerEvent("addcart", {}, {})
    }
  }
})
