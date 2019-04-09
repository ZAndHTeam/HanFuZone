//获取应用实例
var app = getApp();

Page({
  data: {

    releaseFocus: false,

    nickName: app.globalData.userMoreInfo.nickName,
    // 动态数组
    friendTimes: app.globalData.myTrend,

    signature: app.globalData.userMoreInfo.signature,


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
    friendTimes: app.globalData.myTrend,

    currentComment: '',
    currentCommentInex: 0,
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

  onShow(options) {
    var myTrend = app.globalData.myTrend;
    
    this.setData({
      nickName: app.globalData.userMoreInfo.nickName,
      // 动态数组
      friendTimes: myTrend.reverse(),
      signature: app.globalData.userMoreInfo.signature,

      tabsNumber: [
        app.globalData.myTrend.length,
        app.globalData.follows.length,
        app.globalData.fans.length,
      ],
    })

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
    wx.navigateTo({
      url: 'setting/setting',
    })
  },

  // 点击新动态
  newTrend(e) {
    wx.navigateTo({
      url: 'newTrend',
    })
  },

  /**
     * 点击喜欢按钮
     */
  likeAction(e) {
    let { friendTimes, activeTab } = this.data;

    // 修改喜欢参数
    var info = friendTimes[e.currentTarget.dataset.index];
    info.isLike = !info.isLike;
    friendTimes[e.currentTarget.dataset.index] = info;
    app.globalData.myTrend = friendTimes;
    // 刷新界面
    this.setData({ friendTimes: app.globalData.myTrend });
    

  },

  //点击评论
  commentAction(e) {
    this.setData({
      releaseFocus: true,
      currentCommentInex: e.currentTarget.dataset.index
    })
  },
  //消失评论框
  clickMask(e) {
    this.setData({
      releaseFocus: false
    })
  },
  clickSubmitView(e) {
    this.setData({
      releaseFocus: true
    })
  },
  textChange: function (e) {
    this.setData({
      currentComment: e.detail.value
    })
  },
  // 发送评论
  sendComment(e) {
    this.setData({
      releaseFocus: false
    })

    let { friendTimes, currentComment, currentCommentInex, activeTab } = this.data;
    var info = friendTimes[currentCommentInex];
    var comment = {
      nickName: app.globalData.userMoreInfo.nickName,
      comment: currentComment
    };
    info.comments.push(comment);
    friendTimes[currentCommentInex] = info;

    // 修改全局变量
    app.globalData.myTrend = friendTimes;

    // 刷新界面
    this.setData({ friendTimes: app.globalData.myTrend });
    
  }
  
})

