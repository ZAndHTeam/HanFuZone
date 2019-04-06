// posts.js
// var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');

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
    
    // 动态数组s
    friendTimes: [
      { 
        contentText: '1\n3', 
        nickName: '我',
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
      
    }
    this.setData({ friendTimes: friendTimes });
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
}),

function sendCommend (commentString){
  this._updateSelectedPage(e.currentTarget.dataset.index);

  // 更换数据源
  wx.showLoading({
    title: '发送中',
  });

  let { friendTimes } = this.data;
  if (this.data.activeTab == 0) {
    util.postApi(
      "/friend",
      { data: "commentString" },
    ),
      function (res) {
        friendTimes = res;
      }
  } else {
    util.getApi(
      "/friend",
      { data: "all" },
    ),
      function (res) {
        friendTimes = res;
      }
  }
  this.setData({ friendTimes: friendTimes });
  wx.hideLoading();
}