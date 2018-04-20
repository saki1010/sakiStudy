// pages/dayJoke/dayJoke.js
var app = getApp();
var utils = require('../../utils/util.js');
var isLoading = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    api_joke: 'https://api.avatardata.cn/Joke/NewstJoke',
    api_image: 'https://api.avatardata.cn/Joke/NewstImg',
    count: 12,
    pageJoke: 1,
    pageImage: 1,
    jokeDatas: [],
    imageDatas: [],
    navbar: ['笑话', '趣图'],
    currentTab: 0,  
    isHideLoadMore: true,
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getJokeData(1);
    this.getImageData(1);
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    isLoading = true;
    if (this.data.currentTab == 0){
      this.setData({
        pageJoke: 1,
      });
      this.getJokeData(1);
    }else {
      this.setData({
        pageImage: 1,
      });
      this.getImageData(1);
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    isLoading = false;
    if (this.data.isHideLoadMore){
      this.setData({
        isHideLoadMore: false,
      });
      if (this.data.currentTab == 0) {
        this.getJokeData(this.data.pageJoke);
      } else {
        this.getImageData(this.data.pageImage);
      }
    }
  },

  getJokeData: function(index) {
    if (isLoading){
      wx.showNavigationBarLoading();
    } 
    var params = { key: app.globalData.joke_key, page: index,rows: this.data.count };
    utils.getData(this.data.api_joke, params, (json)=>{
      this.completeLoadingRefresh();
      this.setData({
        jokeDatas: isLoading ? json.result : this.data.jokeDatas.concat(json.result),
        pageJoke: this.data.pageJoke + 1,
      })
    }, (error)=>{
      this.completeLoadingRefresh();
    });
  },

  getImageData: function (index) {
    if (isLoading) {
      wx.showNavigationBarLoading();
    } 
    var params = { key: app.globalData.joke_key, page: index, rows: this.data.count };
    utils.getData(this.data.api_image, params, (json) => {
      this.completeLoadingRefresh();
      this.setData({
        imageDatas: isLoading ? json.result : this.data.imageDatas.concat(json.result),
        pageImage: this.data.pageImage + 1,
      })
    }, (error) => {
      this.completeLoadingRefresh();
    });
  },

  completeLoadingRefresh:function () {
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
    this.setData({
      isHideLoadMore: true,
    })
  },

  lookBigPic:function(e) {
    var img = e.currentTarget.dataset.img;
    wx.previewImage({
      urls: [img],
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})