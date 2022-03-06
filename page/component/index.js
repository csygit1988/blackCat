Page({
  data: {
    imgUrls: [
      '/image/banner1.jpg',
      '/image/banner2.jpg',
      '/image/banner3.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },

  onLoad:function(options){
    wx.cloud.database().collection('goods').get()
    .then(res=>{
      this.setData({
        list:res.data
      })
    }),
    wx.cloud.database().collection('recEntry').get()
    .then(res=>{
      this.setData({
        recimgs:res.data
      })
    })
    wx.cloud.database().collection('recbottom').get()
    .then(res=>{
      this.setData({
        aimg:res.data
      })
    })
  }
})