// pages/home/childCpn/recommends/recommends.js
Component({
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onImageLoad(){
      this.triggerEvent('imageLoad', {}, {})
    }
  }
})
