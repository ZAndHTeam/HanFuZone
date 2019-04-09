// posts.js
var app = getApp();
import { $init, $digest } from '../../utils/common.util'

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

    currentComment: '',
    currentCommentInex: 0,
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

    const db = wx.cloud.database();
    db.collection('friendTimes').add({
      data: {
        friendTimes: friendTimes,
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          username: e.detail.value.username
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
        }
    })

    wx.hideLoading();
    this.setData({
      releaseFocus: false
    })
  },

  /**
   * 更新tab位置
   */
  _updateSelectedPage(page) {
    let { tabContainer, activeTab } = this.data;
    activeTab = page;
    this.setData({ activeTab: activeTab })
    tabContainer.offset = tabContainer.windowWidth * activeTab;
    this.setData({ 
      tabContainer: this.data.tabContainer,
      currentCommentInex: 0,
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

  handleImagePreview(e) {
    let { friendTimes, currentCommentInex } = this.data;
    
    const idx = e.target.dataset.idx
    var info = friendTimes[currentCommentInex];
    const image = info.contentImage;

    console.log(info);

    wx.previewImage({
      current: image,
      urls: [image],
    })
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