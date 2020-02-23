Component({
  properties: {
    title: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    itemclick(event) {
      this.setData({
          currentIndex: event.currentTarget.dataset.index
      })
      this.triggerEvent("tabclick", {index:this.data.currentIndex} , {})
    }
  }
})
