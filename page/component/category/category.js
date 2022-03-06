Page({
    data: {
        curIndex: 0,
        isScroll: false,
        toView:"vegetable",
        curIndex:0
    },
    onLoad:function(options){
      wx.cloud.database().collection('sort').get()
      .then(res=>{
        this.setData({
          category:res.data
        })
        console.log(res.data);
      })
  },

    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
        console.log(e.target.dataset);
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})