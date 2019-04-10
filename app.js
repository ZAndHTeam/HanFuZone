// app.js

App({
  onLaunch: function () {

    for (var i = 0; i < this.globalData.myTrend.length; i++) {
      this.globalData.myTrend[i].nickName = this.globalData.userMoreInfo.nickName;
    }
  },


  //全局数据--测试
  globalData: {
    //关注
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
        friendNeedImg: true,
        comments: [
          {
            nickName: "张三",
            comment: "adadasd"
          },
        ]
      },
      {
        nickName: '我',
        contentText: '1\n3',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true,
        comments: []
      },
      {
        nickName: '我',
        contentText: '1\n3',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true,
        comments: []
      },
      {
        nickName: '我',
        contentText: '1\n3',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true,
        comments: []
      },
      {
        nickName: '我',
        contentText: '1\n3',
        createDate: '2019 01/23',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true,
        comments: []
      },
    ],

    // 推荐
    recommend: [
      {
        nickName: '小猫咪',
        contentText: '我是张全蛋，今天是我来到富土康的第一天',
        createDate: '2019 02/20',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true,
        comments: []
      },
      {
        nickName: '小猫',
        contentText: '我是张全蛋，今天是我来到富土康的第一天',
        createDate: '2019 02/20',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true,
        comments: []
      },
      {
        nickName: '小',
        contentText: '我是张全蛋，今天是我来到富土康的第一天',
        createDate: '2019 02/20',
        contentImage: '../image/defaultAvater.png',
        friendNeedImg: true,
        comments: []
      },
    ],

    // 用户信息
    userMoreInfo: {
      nickName: '我叫王曼曼',
      signature: '这是一个懒人',
      sex: '',
      birthday: '2019 03/14',
      headerPath:'../image/defaultAvater.png'
    },

    // 我的动态
    myTrend: [
      {
        nickName: '',
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
        nickName: '',
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
    fans: [
      {
        nikeName: '曼曼粉',
        subtitle: '我是王曼的粉',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我是王曼的粉',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我是王曼的粉',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我是王曼的粉',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我是王曼的粉',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我是王曼的粉',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我是王曼的粉',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我是王曼的粉',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我是王曼的粉',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我是王曼的粉',
        avatarImage: '',
      },
    ],

    // 关注
    follows: [
      {
        nikeName: '曼曼粉',
        subtitle: '我关注王曼啦',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我关注王曼啦',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我关注王曼啦',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我关注王曼啦',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我我关注王曼啦',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我关注王曼啦',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我关注王曼啦',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我关注王曼啦',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我关注王曼啦',
        avatarImage: '',
      },
      {
        nikeName: '曼曼粉',
        subtitle: '我关注王曼啦',
        avatarImage: '',
      }
    ]

  }

})