App({
  // 小程序一启动就会执行
  onLaunch: function () {
   //console.log('start');
   wx.cloud.init({
     env:'csy1202-9gt6j8gl775dc5a2'
   })
  },

  globalData: {
    hasLogin: false,
  }
})
