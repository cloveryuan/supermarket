// 将str中的a替换成b
function delSpace(str,a,b){
	while(str.indexOf(a) > -1){
		str = str.replace(a,b);
	}
	return str
}
//判断是否是素数，是返回true,否则返回false
function isPrime(num){
	// var isOK = true;
	for(var i = 2;i<num;i++){
		if(num%i==0){
			return false;
		}
	}
	return true
}
//调用当前系统时间时间表，小于9前面加0
function add0(num){
	if(num>9){
		return num;
	}else{
		return "0" + num;
	}
}
function time(){
	var myDate = new Date();
 	var year = myDate.getFullYear();
 	var month = myDate.getMonth()+1;
 	var day = myDate.getDate();
 	var h = myDate.getHours();
 	var m  = myDate.getMinutes();
 	var s = myDate.getSeconds();
 	var timer = year + "-" + add0(month) + "-" +add0(day) + "  "  + add0(h) + ":" + add0(m) + ":" + add0(s);
 	return timer;

}
//调用倒计时，距离多少天多长小时
function countDown(a1,a2,a3,a4,a5,a6){
	var futDate = new Date(a1,a2,a3,a4,a5,a6);
	var futtime = futDate.getTime();
	var nowDate = new Date;
	var nowtime = nowDate.getTime();
	console.log(futtime);
	console.log(nowtime);
	var dif = futtime - nowtime;//两个时间毫秒差值
	// console.log(diffent);
	// 每天每小时每分钟转换成毫秒数开始
	var mt = 1000 * 60;//minutes每分钟多少毫秒
	var ht = mt * 60;//hours每小时多少毫秒
	var dt = ht * 24;//day每天多少毫秒
	//每天的毫秒数结束
	var d = parseInt(dif/dt);
	var h = parseInt(dif%dt/ht);
	var m = parseInt(dif%dt%ht/mt);
	var s = parseInt(dif%dt%ht%mt/1000);
	var res = '距离2018.01.01 00:00:00还有' + d + '天' + h + '小时' + m + '分' + s + '秒';
	return res
}