// page/component/databases/databases.js
Page({
    data:{
        list:{}
    },
    onLoad() {
        //传统写法
        // wx.cloud.database().collection('goods')
        //     .get({
        //             success(res){
        //                     console.log('数据库请求成功',res)
        //                 },
        //                 fail(err) {
        //                     console.log('数据库请求失败')
        //                 }
        //             })
        //     }

        //es6的promise写法
        wx.cloud.database().collection('goods').get()
            .then(res => {
                this.setData({
                    list:res.data
                })
            })
            .catch(err => {
                console.log('失败');
            })
    }
})