var app = getApp();

Page({
    data: {
        text: "这是一个界面",
        onPullDownRefresh: function() {
            console.log('onPullDownRefresh')
        }
    },
    onload: function(options) {
        //页面初始化options为页面跳转所带来的参数
    },
    lookdetail: function(e) {
        var lookid = e.currentTarget.dataset;
        wx.navigateTo({
            url: '/pages/index/index?lookid',
        })
    },
    onReady: function() {
        //页面渲染完成
    },
    cart: function() {
        console.log('cart');
    },
    onShow: function() {
        //页面显示
    },
    onHide: function() {
        //页面隐藏
    },
    onUnload: function() {
        //页面关闭
    }
})