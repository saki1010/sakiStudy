const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//api需求中 日期前不能帶0
const getToday = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [month, day].join('/');
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getData = (api, params, requestOk, requestFail) => {
  wx.request({
    url: api,
    data: params,
    dataType: 'json',
    success: function (res) {
      console.log(res.data);
      requestOk(res.data);
    },
    fail: function (error){
      console.log(error);
      requestFail(error);
    }
  })
}

const getDateYMD = (unixtime)=> {
  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(unixtime);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  // returnArr.push(formatNumber(date.getSeconds())); 
  return returnArr.join('-');
}

module.exports = {
  formatTime: formatTime,
  getToday: getToday,
  getData: getData,
  getDateYMD: getDateYMD,
}
