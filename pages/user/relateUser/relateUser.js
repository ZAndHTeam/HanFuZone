

var app = getApp();

Page ({


  data: {
    // 动态数组
    userCrads: [],
    title: '',
  },

  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var title = options.type == 'follow' ? '关注' : '粉丝';
    wx.setNavigationBarTitle({
      title: title,
    });
    setTimeout(() => {this._updatePage(title)}, 0);
    // this._updatePage(title);
  },
  
  // 切换数据
  _updatePage(title) {
    this.setData({ title:title });
    console.log(this.title);
    if (title == '关注') {
      this.setData ({
        userCrads: app.globalData.follows,
      });
    } else {
      this.setData({
        userCrads: app.globalData.fans,
      });
    }
  },

  toDetail(e) {
    wx.navigateTo({
      url: 'otherUser',
    })
  },
})