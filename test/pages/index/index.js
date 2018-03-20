//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        //数据初始化
        toView: "",
        motto: 'Mihi_Store',
        userInfo: {},
        //是否显示swiper滑动视图组件 面板指示点
        indicatorDots: true,
        //是否自动切换
        autoplay: true,
        //自动切换间隔时间
        interval: 3000,
        //滑动时长
        duration: 100,
        // newgoods新商品图片数组数据
        newgoods: [{
            "hg_pic": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
        }, {
            "hg_pic": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg"
        }, {
            "hg_pic": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
        }],
        // hotgoods热卖商品图片数据
        hotgoods: [{
            "more_pic": "http://img13.yiguoimg.com/e/albums/2017/170630/153403897791357662_800x468.jpg"
        }, {
            "more_pic": "http://img14.yiguoimg.com/e/albums/2017/170629/153403897729786589_800x468.jpg",
        }, {
            "more_pic": " http://img12.yiguoimg.com/e/albums/2017/170626/153403897618375386_596x379.jpg",
        }, {
            "more_pic": " http://img12.yiguoimg.com/e/albums/2017/170621/153403897468003029_800x468.jpg",
        }],
        // banner_list轮播图图片列表
        banner_list: [{
                "banner": [{
                        "pic_url": "http://img09.yiguoimg.com/e/ad/2016/160825/585749448986042649_800x400.jpg",
                    },
                    {
                        "pic_url": "http://img11.yiguoimg.com/e/ad/2016/160927/585749449690947899_800x400.jpg",
                    },
                    {
                        "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160923/585749449636290871_800x400.jpg",
                    },
                    {
                        "pic_url": "http://img13.yiguoimg.com/e/ad/2016/160914/585749449480315182_800x400.jpg",
                    },
                    {
                        "pic_url": "http://img14.yiguoimg.com/e/ad/2016/161010/585749449889390922_800x400.jpg",
                    }
                ]
            },
            {
                "banner": []
            }
        ]
    },
    // 下拉刷新
    onPullDownRefresh: function() {
        console.log('onPullDownRefresh')
    },
    // 滚动
    scroll: function(e) {
        if (this.data.toView == "top") {
            this.setData({
                toView: ""
            })
        }
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    //单击tap触控事件
    tap: function() {
        this.setData({
            toView: "top"
        })
    },
    //页面加载事件
    onLoad: function() {
        console.log("微信商城开发(欢迎合作)");
        console.log("微信号：123456");
        console.log("博客：345456csdn.net");
    }
})