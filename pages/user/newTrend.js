import { $init, $digest } from '../../utils/common.util'
var app = getApp();

Page({

  data: {
    titleCount: 0,
    contentCount: 0,
    title: '',
    content: '',
    images: []
  },

  onLoad(options) {
    $init(this)
  },

  handleTitleInput(e) {
    const value = e.detail.value
    this.data.title = value
    this.data.titleCount = value.length
    $digest(this)
  },

  handleContentInput(e) {
    const value = e.detail.value
    this.data.content = value
    this.data.contentCount = value.length
    $digest(this)
  },

  chooseImage(e) {
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        this.data.images = images.length <= 3 ? images : images.slice(0, 3)
        $digest(this)
      }
    })
  },

  removeImage(e) {
    const idx = e.target.dataset.idx
    this.data.images.splice(idx, 1)
    $digest(this)
  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images

    wx.previewImage({
      current: images[idx],
      urls: images,
    })
    console.log(urls);
    // var that = this
    // wx.chooseImage({
    //   count: 1, // 默认9
    //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //   success: function (res) {
    //     // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    //     var tempFilePaths = res.tempFilePaths

        // wx.saveFile({
        //   tempFilePath: tempFilePaths[0],
        //   success: function (res1) {
        //     var savedFilePath = res1.savedFilePath
        //     //保存到数据源
        //     app.globalData.userMoreInfo.headerPath = savedFilePath;
        //     // 刷新界面
        //     that.setData({
        //       userInfo: app.globalData.userMoreInfo,
        //     });
        //   }
        // })

    //   }
    // })
  },

  // 点击发送
  submitForm(e) {
    var that = this;
    var images = [];
    console.log(this.data.images);
    for (var i = 0; i < this.data.images.length; i++) {
      wx.saveFile({
        tempFilePath: this.data.images[i],
        success: function (res1) {
          var savedFilePath = res1.savedFilePath;
          //保存到数据源
          images.push(savedFilePath);
          // 刷新界面
          // that.setData({
          //   images: images,
          // });
          console.log(that.data.images.length +'i='+ i);
          if (i == that.data.images.length) {
            var info = {
              nickName: app.globalData.userMoreInfo.nickName,
              contentText: that.data.content,
              createDate: '2019 04/13',
              contentImage: images,
              friendNeedImg: true,
              isLike: false,
              comments: [],
            };

            console.log('=====' + info.contentImage);

            app.globalData.myTrend.push(info);
            app.globalData.friendTimes.push(info);

            wx.showToast({
              title: '发表成功',
              duration: 1000
            })
          }
        }
      })
    }
    if (this.data.images.length == 0) {
      var info = {
        nickName: app.globalData.userMoreInfo.nickName,
        contentText: that.data.content,
        createDate: '2019 01/23',
        contentImage: [],
        friendNeedImg: false,
        isLike: false,
        comments: [],
      };

      console.log('=====' + info.contentImage);

      app.globalData.myTrend.push(info);

      wx.showToast({
        title: '发表成功',
        duration: 1000
      })
    }
  

  }

})