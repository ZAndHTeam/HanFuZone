//app.js
// App({
//   onLaunch: function () {
//     // 展示本地存储能力
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)

//     // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//       }
//     })
//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               // 可以将 res 发送给后台解码出 unionId
//               this.globalData.userInfo = res.userInfo

//               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//               // 所以此处加入 callback 以防止这种情况
//               if (this.userInfoReadyCallback) {
//                 this.userInfoReadyCallback(res)
//               }
//             }
//           })
//         }
//       }
//     })
//   },
//   globalData: {
//     userInfo: null
//   }
// })

App({

  //初始化事件
  onLaunch: function () {
    var that = this;
    console.log("appjs-onLaunch");
  },

  //获取微信用户信息
  getWxUserInfo: function (callback) {
    var that = this;
    //获取微信用户信息
    wx.getUserInfo({
      success: function (res) {
        var data = JSON.parse(res.rawData);
        data.iv = res.iv;
        data.encryptedData = res.encryptedData;
        that.setwxUserInfo(data);
        console.log(that.globalData.wxUserInfo);
        if (typeof (callback) == "function") {
          callback(res);
        }
      }
    })
  },

  //退出当前登陆
  onHide: function () {
    // this.logOut();
  },

  //页面第一次加载执行
  onLoad: function () {
    var that = this;
  },

  //页面每次打开
  onShow: function () {

  },

  /*获取当前页url*/
  getCurrentPageUrl: function () {
    var pages = getCurrentPages()    //获取加载的页面
    var url = '';
    if (pages.length > 0) {
      var currentPage = pages[pages.length - 1]    //获取当前页面的对象
      url = currentPage.route    //当前页面url
    }
    return url
  },
  //退出登录
  logOut: function () {
    var that = this;
    that.globalData.id = 0;
    that.globalData.phone = "";
    that.globalData.name = "";
    that.globalData.status = null;
    that.globalData.publicOpenId = "";
    that.globalData.accessToken = null;
    that.globalData.unionId = null;
    that.globalData.isLoginErp = false;
    that.globalData.wxUserInfo = [];
    console.log('清除登陆信息！');
  },

  //全局数据--测试
  globalData: {
    // 关注
    friendTimes: [
      {
        nickName: '王小曼',
        contentText: '吃得多睡得好',
        createDate: '2019 01/23',
        contentImage: '',
        friendNeedImg: false,
        isLike: true,
         comments: [
          {
            nickName: "张三",
            comment: "adadasd"
          },
          {
            nickName: "李四",
            comment: "我是最帅的"
          }
        ]
      },
      {
        nickName: '张全蛋',
        contentText: '我是张全蛋，今天是我来到富土康的第一天',
        createDate: '2019 02/20',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
      {
        nickName: '我',
        contentText: '1\n3',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
      {
        nickName: '我',
        contentText: '1\n3',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
      {
        nickName: '我',
        contentText: '1\n3',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
      {
        nickName: '我',
        contentText: '1\n3',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      }
    ],

    // 推荐
    recommend: [
      {
        nickName: '小猫咪',
        contentText: '我是张全蛋，今天是我来到富土康的第一天',
        createDate: '2019 02/20',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
      {
        nickName: '小猫',
        contentText: '我是张全蛋，今天是我来到富土康的第一天',
        createDate: '2019 02/20',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
      {
        nickName: '小',
        contentText: '我是张全蛋，今天是我来到富土康的第一天',
        createDate: '2019 02/20',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
    ],

    // 用户信息
    userInfo: {
      nickName: '我叫王曼曼',
      contentText: '',
      sex: '',
      birthday: '2019 03/14',
    },

    // 我的动态
    myTrend: [
      {
        nickName: '王小曼',
        contentText: '吃得多睡得好',
        createDate: '2019 01/23',
        contentImage: '',
        friendNeedImg: false,
        isLike: true,
        comments: [
          {
            nickName: "张三",
            comment: "adadasd"
          },
          {
            nickName: "李四",
            comment: "我是最帅的"
          }
        ]
      },
      {
        nickName: '王小曼',
        contentText: '曼曼可以的',
        createDate: '2019 01/05',
        contentImage: '',
        friendNeedImg: false,
        isLike: true,
        comments: [
          {
            nickName: "张三",
            comment: "adadasd"
          },
          {
            nickName: "李四",
            comment: "我是最帅的"
          }
        ]
      },
    ],

    // 粉丝

    // 关注

  },
})