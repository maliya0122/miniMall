// pages/category/childCpn/Category/Category.js
Component({
  properties: {
    Category: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0,
    maitKey: 0,
    miniWallkey: 0
  },
  methods: {
    click(event) {
      //console.log(event.currentTarget.dataset)
      this.setData({
        currentIndex: event.currentTarget.dataset.index,
        maitKey: event.currentTarget.dataset.maitkey,
        miniWallkey: event.currentTarget.dataset.miniwallkey
      })
      //发送事件
      this.triggerEvent("currentItem", {
        maitKey: this.data.maitKey,
        miniWallkey: this.data.miniWallkey
      }, {})
    }
  }
})