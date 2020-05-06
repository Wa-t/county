import moment from 'moment';

export const monthFormater = (date) => {
  let formatStr = '';
  let monthDayArr = moment(date).format('M:D').split(':');
  switch(monthDayArr[0]) {
    case '1': formatStr = '一月';break;
    case '2': formatStr = '二月';break;
    case '3': formatStr = '三月';break;
    case '4': formatStr = '四月';break;
    case '5': formatStr = '五月';break;
    case '6': formatStr = '六月';break;
    case '7': formatStr = '七月';break;
    case '8': formatStr = '八月';break;
    case '9': formatStr = '九月';break;
    case '10': formatStr = '十月';break;
    case '11': formatStr = '十一月';break;
    case '12': formatStr = '十二月';break;
    default: formatStr = '';break;
  }
  formatStr += monthDayArr[1] < 15 ? '上旬' : '下旬';
  return formatStr;
}

export const checkFull = () => {
  let isFull = window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled || document.fullscreenEnabled;
  //to fix : false || undefined == undefined
  console.log('1', isFull);
  if (isFull === undefined) { isFull = false; }
  return isFull;
}

export const getUrlParams = (url) => {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf("?") + 1);
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (rs, $1, $2) {
      var name = decodeURIComponent($1);
      var val = decodeURIComponent($2);
      val = String(val);
      obj[name] = val;
  });
  return obj;
}

export const getMonthZh = (date) => {
  let formatStr = '';
  const month = moment(date).format('M');
  switch(month) {
    case '1': formatStr = '一月';break;
    case '2': formatStr = '二月';break;
    case '3': formatStr = '三月';break;
    case '4': formatStr = '四月';break;
    case '5': formatStr = '五月';break;
    case '6': formatStr = '六月';break;
    case '7': formatStr = '七月';break;
    case '8': formatStr = '八月';break;
    case '9': formatStr = '九月';break;
    case '10': formatStr = '十月';break;
    case '11': formatStr = '十一月';break;
    case '12': formatStr = '十二月';break;
    default: formatStr = '';break;
  }
  return formatStr;
}


export const getYear = (date) => {
  const year = moment(date).format('Y');
  return year
}