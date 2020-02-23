// pages/cart/product/product.js
var app = getApp();

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
    click(e){
      let iid = e.currentTarget.dataset.iid;
      this.triggerEvent("click", { iid: iid }, {})
    }
  }
})
