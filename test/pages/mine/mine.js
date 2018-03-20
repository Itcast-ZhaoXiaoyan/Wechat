var app = getApp()

Page({
    data: {
        userInfo: {},
        mine_list: [{
                "pic_url": "/images/icons/iocn_home_01.png",
                "title": "我的订单",
            },
            {
                "pic_url": "/images/icons/iocn_home_02.png",
                "title": "优惠券",
            },
            {
                "pic_url": "/images/icons/iocn_home_03.png",
                "title": "收货地址",
            },
            {
                "pic_url": "/images/icons/iocn_home_04.png",
                "title": "客服电话",
            },
            {
                "pic_url": "/images/icons/iocn_home_04.png",
                "title": "提货券",
            },
            {
                "pic_url": "/images/icons/iocn_home_04.png",
                "title": "修改密码",
            }
        ],
        item: {
            signinHidden: false,
            userlocal: {
                nickName: '',
                nickPwd: ''
            },
        }
    },
    // 页面加载事件
    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
    },

    // 模态框 确认
    modalconfirm: function() {
        wx.setStorageSync('username', this.data.item.userlocal.nickName);
        wx.setStorageSync('userpwd', this.data.item.userlocal.nickPwd);
        this.setData({
            'item.signinHidden': true
        })
    },
    // 模态框 取消
    modalcancel: function() {
        var that = this;
        wx.login({
            success: function() {
                wx.getUserInfo({
                    success: function(res) {
                        // success
                        that.setData({
                            userInfo: res.userInfo
                        })
                    }
                })
            }
        })

        this.onShow();
        this.setData({
            userInfo: '',
            'item.signinHidden': true
        })
    },

    // 保存name
    saveusername: function(event) {
        this.setData({
            'item.userlocal.nickName': event.detail.value
        })
    },

    // 保存密码
    saveuserpwd: function() {
        this.setData({
            'item.userlocal.nickPwd': event.detail.value
        })
    },

    // 退出登录
    quit: function() {
        this.setData({
            userInfo: '',
            'item.signinHidden': false
        })
    },
    onReady: function() {
        // 页面渲染完成
    },

    onShow: function() {
        // 页面显示函数
        if (this.sata.userInfo == '') {
            this.setData({
                'item.signinHidden': false
            })
        }

    },
    onHidden: function() {
        // 页面隐藏
    },
    onUnload: function(param) {
        // 页面关闭
    }
})