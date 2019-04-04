//index.js
//获取应用实例

Page({
  data: {
    nickName: '我不叫王曼',
    signature: '这个人很懒！这个人很懒！这个人很懒！',
    tabs: [
      '动态',
      '关注',
      '粉丝',
    ],
    tabContainer: {
      windowWidth: 0,
      lineWidth: 0,
      offset: 0,
    },
    activeTab: 0,
    tabsNumber: [
      19,
      32,
      301,
    ],
    // 动态数组
    friendTimes: [
      {
        contentText: '1\n3',
        nickName: '我',
        createDate: '2019 01/23',
        contentImage: '',
        friendNeedImg: false,
        isLike: true,
      },
      {
        contentText: '2',
        nickName: '我',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
      {
        contentText: '1\n3',
        nickName: '我',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
      {
        contentText: '1\n3',
        nickName: '我',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
      {
        contentText: '1\n3',
        nickName: '我',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      },
      {
        contentText: '1\n3',
        nickName: '我',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true
      }
    ],
  },
  
  onLoad: function () {
    try {
      var res = wx.getSystemInfoSync()
      this.windowWidth = res.windowWidth;
      this.data.tabContainer.lineWidth = this.windowWidth / this.data.tabs.length;
      this.data.tabContainer.windowWidth = res.windowWidth;
      this.setData({ tabContainer: this.data.tabContainer });
    } catch (e) {
    }
  },

  handlerTabTap(e) {
    // 进入相关页面
    switch (e.currentTarget.dataset.index) {
      case 0: {
        wx.navigateTo({
          url: 'trend/trend',
        })
      } break;
      case 1: {
        wx.navigateTo({
          url: 'relateUser/relateUser?type=follow',
        })
      } break;
      case 2: {
        wx.navigateTo({
          url: 'relateUser/relateUser?type=fan',
        })
      } break;
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
  // 点击设置
  settingAction(e) {

  },

  // 点击新动态
  newTrend(e) {
    wx.navigateTo({
      url: 'newTrend',
    })
  },
})
