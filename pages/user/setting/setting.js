var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userMoreInfo
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  uploadHeaderImage(e) {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
       
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res1) {
            var savedFilePath = res1.savedFilePath
            //保存到数据源
            app.globalData.userMoreInfo.headerPath = savedFilePath;
            // 刷新界面
            that.setData({
              userInfo: app.globalData.userMoreInfo,
            });
          }
        })
        
      }
    })
    
  }
})
