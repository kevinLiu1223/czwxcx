var postsData = require('../../data/posts-data.js')
console.log(postsData)
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    // this.data.postList = postsData.postList
    // console.log(this.data.postLis)
    this.setData({
      postList: postsData.postList
    })
  },
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId
    })
  }
})