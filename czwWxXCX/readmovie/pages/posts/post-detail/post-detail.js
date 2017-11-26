var postsData = require('../../../data/posts-data.js')

Page({
  data:{

  },
  onLoad: function (options) {
    var postId = options.id
    var postData = postsData.postList[postId]
    // console.log(postsData.postList[postId])
    // this.data.postData = postData;
    this.setData({
      postData: postData
    })
  }
})