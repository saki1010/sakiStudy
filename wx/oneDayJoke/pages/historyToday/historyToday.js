
//获取应用实例
const app = getApp()
var utils = require('../../utils/util.js')
var test = { "reason": "success", "result": [{ "day": "4\/16", "date": "1071年04月16日", "title": "东罗马帝国（即拜占庭帝国）在意大利境内的统治正式结束", "e_id": "4627" }, { "day": "4\/16", "date": "1380年04月16日", "title": "朱棣就藩北平", "e_id": "4628" }, { "day": "4\/16", "date": "1604年04月16日", "title": "东方海洋世界的唯一强权郑芝龙出生", "e_id": "4629" }, { "day": "4\/16", "date": "1766年04月16日", "title": "乾隆皇帝的第五子爱新觉罗·永琪逝世", "e_id": "4630" }, { "day": "4\/16", "date": "1788年04月16日", "title": "法国博物学家布丰（又译作“蒲丰”）逝世", "e_id": "4631" }, { "day": "4\/16", "date": "1841年04月16日", "title": "清政府革职琦善 任命林则徐协办海防", "e_id": "4632" }, { "day": "4\/16", "date": "1867年04月16日", "title": "美国飞机设计师维尔伯·莱特诞生", "e_id": "4633" }, { "day": "4\/16", "date": "1879年04月16日", "title": "丹麦天文学家汉斯·劳诞生", "e_id": "4634" }, { "day": "4\/16", "date": "1886年04月16日", "title": "德国共产党领导人恩斯特·台尔曼诞生", "e_id": "4635" }, { "day": "4\/16", "date": "1889年04月16日", "title": "喜剧大师卓别林诞辰", "e_id": "4636" }, { "day": "4\/16", "date": "1898年04月16日", "title": "德国数学家赫尔穆特·克内泽尔诞生", "e_id": "4637" }, { "day": "4\/16", "date": "1903年04月16日", "title": "基什尼奥发生残酷大屠杀", "e_id": "4638" }, { "day": "4\/16", "date": "1912年04月16日", "title": "从电影明星到中国第一位美女飞行员李霞卿诞辰", "e_id": "4639" }, { "day": "4\/16", "date": "1919年04月16日", "title": "美国提出山东省由五国共管", "e_id": "4640" }, { "day": "4\/16", "date": "1922年04月16日", "title": "德国和俄国签订《拉巴洛条约》", "e_id": "4641" }, { "day": "4\/16", "date": "1928年04月16日", "title": "日本再次出兵山东", "e_id": "4642" }, { "day": "4\/16", "date": "1940年04月16日", "title": "丹麦女王玛格丽特二世诞辰", "e_id": "4643" }, { "day": "4\/16", "date": "1945年04月16日", "title": "苏军向柏林发起总攻", "e_id": "4644" }, { "day": "4\/16", "date": "1946年04月16日", "title": "汪精卫之妻陈壁君被公审", "e_id": "4645" }, { "day": "4\/16", "date": "1947年04月16日", "title": "美国克萨斯城硝酸铵工业大爆炸", "e_id": "4646" }, { "day": "4\/16", "date": "1948年04月16日", "title": "欧洲经济合作组织建立", "e_id": "4647" }, { "day": "4\/16", "date": "1948年04月16日", "title": "杜鲁门批准援外法案", "e_id": "4648" }, { "day": "4\/16", "date": "1950年04月16日", "title": "解放海南岛战役开始", "e_id": "4649" }, { "day": "4\/16", "date": "1961年04月16日", "title": "古巴反政府武装猪湾登陆失败", "e_id": "4650" }, { "day": "4\/16", "date": "1964年04月16日", "title": "苏联制造伊犁、塔城暴乱事件", "e_id": "4651" }, { "day": "4\/16", "date": "1966年04月16日", "title": "《三家村札记》和《燕山夜话》受到批判", "e_id": "4652" }, { "day": "4\/16", "date": "1968年04月16日", "title": "毛泽东支持美国黑人斗争的声明发表", "e_id": "4653" }, { "day": "4\/16", "date": "1972年04月16日", "title": "日本作家川端康成自杀", "e_id": "4654" }, { "day": "4\/16", "date": "1974年04月16日", "title": "中国著名女演员、导演徐静蕾出生", "e_id": "4655" }, { "day": "4\/16", "date": "1976年04月16日", "title": "中国著名女演员舒淇出生", "e_id": "4656" }, { "day": "4\/16", "date": "1985年04月16日", "title": "台湾第一个试管婴儿诞生", "e_id": "4657" }, { "day": "4\/16", "date": "1987年04月16日", "title": "邓小平会见香港基本法起草委员会委员", "e_id": "4658" }, { "day": "4\/16", "date": "1988年04月16日", "title": "巴勒斯坦领导人杰哈德遭暗杀身亡", "e_id": "4659" }, { "day": "4\/16", "date": "1989年04月16日", "title": "全国人大常委会副委员长胡厥文逝世", "e_id": "4660" }, { "day": "4\/16", "date": "1991年04月16日", "title": "生态学家侯学煜逝世", "e_id": "4661" }, { "day": "4\/16", "date": "1991年04月16日", "title": "浙江湖州合伙盗窃犯被抓获", "e_id": "4662" }, { "day": "4\/16", "date": "1992年04月16日", "title": "阿富汗游击队组织接管政权", "e_id": "4663" }, { "day": "4\/16", "date": "1992年04月16日", "title": "中国首次派出联合国维和人员赴金边", "e_id": "4664" }, { "day": "4\/16", "date": "1993年04月16日", "title": "国务院通知禁止使用各种代币购物券", "e_id": "4665" }, { "day": "4\/16", "date": "1995年04月16日", "title": "新闻教育家顾执中逝世", "e_id": "4666" }, { "day": "4\/16", "date": "1996年04月16日", "title": "日美签署《日美安保联合宣言》", "e_id": "4667" }, { "day": "4\/16", "date": "1996年04月16日", "title": "美重建冷战后同盟", "e_id": "4668" }, { "day": "4\/16", "date": "2002年04月16日", "title": "和平协会第三届年会开幕 通过《重庆宣言》", "e_id": "4669" }, { "day": "4\/16", "date": "2007年04月16日", "title": "美国历史上最惨重校园枪击案", "e_id": "4670" }, { "day": "4\/16", "date": "2014年04月16日", "title": "韩国沉船事件", "e_id": "4671" }], "error_code": 0 };

Page({
  data: {
    toDay: '1/1',
    api: 'https://v.juhe.cn/todayOnhistory/queryEvent.php',
    key: app.globalData.ht_key,
    eventData: [],
  },
 
  onLoad: function () {
    var time = utils.getToday(new Date());
    this.setData({
      toDay: time,
      // eventData: test.result,
    })
    wx.setNavigationBarTitle({
      title: this.data.toDay,//页面标题为路由参数
    })
    this.getHestoryToday();
  },
  
  //http://v.juhe.cn/todayOnhistory/queryEvent.php? key=YOURKEY&date=1/1
  //key:  cd80ec9b4d4034481fc9331ad30281c3
  getHestoryToday: function(){
    var params = { key: this.data.key, date: this.data.toDay}
    utils.getData(this.data.api,params, (json)=>{
      this.setData({
        eventData: json.result,
      })
    }, (error)=>{
      
    })
  },

  openDetail: function (e) {
    console.log(e)
    //从点击事件里边取index
    wx.navigateTo({
      url: '../todayDetail/todayDetail?id=' + this.data.eventData[e.currentTarget.dataset.index].e_id,
    })
  },
  
  onUnload () {

  },
})
