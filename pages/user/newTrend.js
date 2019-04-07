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
  },

  // 点击发送
  submitForm(e) {
    var info = {
      nickName: app.globalData.userMoreInfo.nickName,
      contentText: this.data.content,
      createDate: '2019 01/23',
      contentImage: '',
      friendNeedImg: false,
      isLike: false,
      comments: [],
    };

    app.globalData.myTrend.push(info);

    wx.showToast({
      title: '发表成功',
      duration: 1000
    })
  }

})