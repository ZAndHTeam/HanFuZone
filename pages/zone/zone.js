// posts.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    releaseFocus: false,

    tabs: [
      '关注', 
      '推荐'
      ],
    tabContainer: {
      windowWidth: 0,
      lineWidth: 0,
      offset: 0,
    },
    activeTab: 0,

    // 动态数组
    friendTimes: app.globalData.friendTimes,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      var res = wx.getSystemInfoSync()
      this.windowWidth = res.windowWidth;
      this.data.tabContainer.lineWidth = this.windowWidth / this.data.tabs.length;
      this.data.tabContainer.windowWidth = res.windowWidth;
      this.setData({ tabContainer: this.data.tabContainer });
    } catch (e) {
    }
  },

  /**
   * 处理tab点击事件
   */
  handlerTabTap(e) {
    this._updateSelectedPage(e.currentTarget.dataset.index);

    // 更换数据源
    wx.showLoading({
      title: '加载中',
    });

    let { friendTimes } = this.data;
    if (this.data.activeTab == 0) {
      this.setData({ friendTimes: app.globalData.friendTimes });
    } else {
      this.setData({ friendTimes: app.globalData.recommend });
    }

    wx.hideLoading();
  },

  /**
   * 更新tab位置
   */
  _updateSelectedPage(page) {
    let { tabContainer, activeTab } = this.data;
    activeTab = page;
    this.setData({ activeTab: activeTab })
    tabContainer.offset = tabContainer.windowWidth * activeTab;
    this.setData({ tabContainer: this.data.tabContainer })
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

    if (activeTab == 0) {
      // 修改全局变量
      app.globalData.friendTimes = friendTimes;

      // 刷新界面
      this.setData({ friendTimes: app.globalData.friendTimes });

    } else {
      // 修改全局变量
      app.globalData.recommend = friendTimes;

      // 刷新界面
      this.setData({ friendTimes: app.globalData.recommend });
    }
    
  },

}),

function sendCommend (commentString){
  this._updateSelectedPage(e.currentTarget.dataset.index);
  
  // 更换数据源
  wx.showLoading({
    title: '发送中',
  });

  wx.hideLoading();
}