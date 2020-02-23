// pages/cart/bottombar/bottombar.js
Component({
  properties: {
    allchecked:{
      type:Boolean,
      value:false
    },
    totalprice:{
      type: Number,
      value: 0
    },
    totalnum:{
      type: Number,
      value: 0
    }
  },
  data: {
    
  },
  methods: {
    bclick(){
      this.triggerEvent('bclick', { allchecked: this.properties.allchecked },{})
    }
  }
})
