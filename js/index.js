var date = new Date();
var year = date.getFullYear();//年
var mon = date.getMonth() + 1;//月
var da = date.getDate();//日
var hou = date.getHours();//时
var min = date.getMinutes();//分
var sen = date.getSeconds();//秒
var day = date.getDay();//星期几
var starTime = document.querySelector('#starTime');
var endTime = document.querySelector('#endTime');
var str1 = year + "-" + mon + "-" + da;
var str2 = year + "-" + mon + "-" + (da + 1);
starTime.innerHTML = str1;
endTime.innerHTML = str2;
console.log(year);
var y = year.toString();
console.log(y);
var y1 = y.substr(2, 2);
console.log(y1);
var str3 = y1 + '年' + mon + "月" + da + "日" + (hou - 5) + "时" + (min - 5) + "分";
var time = document.querySelector("#time");
time.innerHTML = str3;
var apply = document.querySelector("#apply");
var str4 = year + '-' + mon + "-" + da;
apply.innerHTML = str4;