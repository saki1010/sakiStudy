// pages/todayDetail/todayDetail.js

var app = getApp()
var utils = require('../../utils/util.js')

var imageArr = [];
var test = { "reason": "success", "result": [{ "e_id": "4636", "title": "喜剧大师卓别林诞辰", "content": "    在127年前的今天，1889年4月16日 (农历三月十七)，喜剧大师卓别林诞辰。\r\n    卓别林这个名字，对全世界的人来说，都不是陌生的。他扮演的那个流浪汉的形象，穿着一条鼓囊囊的裤子和一双大皮鞋，拿着一根手杖，戴一顶圆形礼帽，嘴上长着一撮小胡子，迈着鸭子步走路……在世界各族人民的生活中，留下了一个可爱又可笑的小丑形象。卓别林十分成功塑出这个形象，是和他的切身经历分不开的。（历史上的今天lssdjt.com）\r\n    1889年4月16日（距今127年），英国电影艺术家，喜剧大师查理·卓别林，出生于伦敦一个乐手之家。17岁加入卡尔诺剧团并作为喜剧演员随团到美国表演。在好莱坞开始电影生涯。\r\n    他塑造的多是被损害、被轻蔑的小人物形象，通过出色的喜剧表演，达到深刻的悲喜剧艺术效果。著名喜剧片有《淘金记》、《城市之光》、《摩登时代》、《大独裁者》等。影片多为自制、自编、自导、自演，且多为无声影片。\r\n    第二次世界大战后，他在电影界已享有盛名。当麦卡锡主义盛行时，他被怀疑有共产主义倾向而遭到迫害，随后移居瑞士，继续拍片。1964年出版《我的自传》。1972年他回到美国并被授予特别奥斯卡奖。1975年被英国授予爵士称号。1977年圣诞节在瑞士家中去世。\r\n    1889年4月16日（距今127年）卓别林出生在英国伦敦一个喜剧演员家庭里，由于父母的影响，自幼爱上了艺术，希望当名演员。不幸父亲去世过早，母亲得了神经病，年幼的卓别林成了孤儿，他进过孤儿院，做过乞丐，当过小报童，小佣人，还在游艺场做过扫地的杂工。一个偶然的机会，使卓别林实现了做演员的夙愿。一个晚上，游艺场的一名主要喜剧演员病倒了，经理急的没有办法，忽然想到扫地工卓别林平时一直在学演戏，抱着试试的心理，叫卓别林上台代演，可是那位喜剧演员是位身位魁梧的男子汉，他的衣服卓别林穿起来又肥又大，裤子像个大口袋，一双大鞋走起路拖拖踏踏，而圆顶礼帽却又太小，这样装束，像个小流浪汉，一出场就引的大家笑了。他一连演了好多场，小流浪汉的形象越演越活。1907年，卓别林经人推荐，参加喜剧《足球赛》的演出获得成功，终于成了剧团的正式演员，开始了伟大的艺术生涯。\r\n    1910年，卓别林随剧团到美国演出，他的精湛演技被美国滑稽影片公司看中，从此，他便踏上了电影演员的生活道路。他刻苦学习艺术，向一切有经验的人求教，包括工人、裁缝、招待员、流浪汉等，提高自己的艺术素养。\r\n\r\n", "picNo": "13", "picUrl": [{ "pic_title": "卓别林", "id": 1, "url": "http:\/\/images.juheapi.com\/history\/4636_1.jpg" }, { "pic_title": "在伦敦肯宁顿路小学读书时的卓别林(7岁半)", "id": 2, "url": "http:\/\/images.juheapi.com\/history\/4636_2.jpg" }, { "pic_title": "卓别林《大独裁者》", "id": 3, "url": "http:\/\/images.juheapi.com\/history\/4636_3.jpg" }, { "pic_title": "1936年3月，世界喜剧电影大师卓别林来到上海，下榻南京路著名的华懋饭店。", "id": 4, "url": "http:\/\/images.juheapi.com\/history\/4636_4.jpg" }, { "pic_title": "1920年，卓别林和范朋克、毕克馥在拍片的间隙坐马车游玩。", "id": 5, "url": "http:\/\/images.juheapi.com\/history\/4636_5.jpg" }, { "pic_title": "1924年，卓别林与他的第二位妻子和他的岳母。", "id": 6, "url": "http:\/\/images.juheapi.com\/history\/4636_6.jpg" }, { "pic_title": "大明星宝莲·高黛是卓别林多年的同居情妇", "id": 7, "url": "http:\/\/images.juheapi.com\/history\/4636_7.jpg" }, { "pic_title": "1928年，卓别林与精神状况不稳定的母亲在一起，这是他们最后的合影。", "id": 8, "url": "http:\/\/images.juheapi.com\/history\/4636_8.jpg" }, { "pic_title": "1942年，54岁的卓别林认识了17岁的乌娜，二人不久便私奔了。", "id": 9, "url": "http:\/\/images.juheapi.com\/history\/4636_9.jpg" }, { "pic_title": "卓别林是否又在构思他的作品", "id": 10, "url": "http:\/\/images.juheapi.com\/history\/4636_10.jpg" }, { "pic_title": "1952年12月，卓别林和乌娜在晚餐会上与英格丽·褒曼互致问候。", "id": 11, "url": "http:\/\/images.juheapi.com\/history\/4636_11.jpg" }, { "pic_title": "被封为爵士后的卓别林与妻子、女儿观看马戏表演。拍下这张照片后一年，他便与世长辞。", "id": 12, "url": "http:\/\/images.juheapi.com\/history\/4636_12.jpg" }, { "pic_title": "乌娜为卓别林生下八个子女，这是其中六个和夫妇俩合影。", "id": 13, "url": "http:\/\/images.juheapi.com\/history\/4636_13.jpg" }] }], "error_code": 0 };

var test2 = { "reason": "success", "result": [{ "e_id": "4627", "title": "东罗马帝国（即拜占庭帝国）在意大利境内的统治正式结束", "content": "    在945年前的今天，1071年4月16日 (农历三月十四)，东罗马帝国（即拜占庭帝国）在意大利境内的统治正式结束。\r\n    罗伯特·吉斯卡尔（？-1085）是诺曼冒险家中的英雄人物，他带领兄弟十人及部属来到意大利，1054-1059年，打败拜占庭军队，占领卡拉布里亚和阿普利亚，并迫使教皇承认他为公爵,1059年，教皇封吉斯卡尔为公爵，承认他对南意大利的统治，领土包括阿普利亚及加拉巴尼亚。1071年,经4年围攻，攻陷拜占庭在意大利的最后据点巴里城。同时支持其弟罗哲尔（罗杰）占领西西里。由此诺曼人控制了整个南意大利。标志着。\r\n\r\n", "picNo": "0", "picUrl": [] }], "error_code": 0 };
Page({

  /**
   * 页面的初始数据
   */
  data: {
    api: 'https://v.juhe.cn/todayOnhistory/queryDetail.php',
    id: '',
    event: '',
    showIndicator: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        id: options.id,
        // event: test,
      });
      this.getDetailEvent();
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  //http://v.juhe.cn/todayOnhistory/queryDetail.php?key=YOURKEY&e_id=1
  //key:  cd80ec9b4d4034481fc9331ad30281c3
  getDetailEvent: function (){
    var params = { key: app.globalData.ht_key, e_id: this.data.id};
    utils.getData(this.data.api, params, (json)=> {
      this.setData({
        event: json,
      })
    }, (error)=>{

    })
  },

  previewImage: function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;  //子循环索引
    var position = e.currentTarget.dataset.position;  //子循环自定义属性，取父循环索引赋予
    // console.log(indexArr);
    this.getImageArr(position);
    wx.previewImage({
      urls: imageArr,
      current: imageArr[index],
    });
  },

  getImageArr: function (index) {
    var pics = this.data.event.result.picUrl;
    for (var i in this.data.event.result[index].picUrl) {
      imageArr = imageArr.concat(this.data.event.result[index].picUrl[i].url);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})