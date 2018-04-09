var pagescrolltop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
var jp = document.querySelector("#jump");

if (pagescrolltop > 800) {
	jp.style.display = "block"
} else {
	jp.style.display = "none"
}


//^^头部右边X点击关闭
 	var cha = document.getElementById("cha");
 	cha.onclick = function(){
 		var top = document.getElementById("top");
 		top.style.display = "none";
 	}
//^^左侧导航栏滑到下面出现	
	window.onscroll = function(){	
		var pagescrolltop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		
		var jpA = jp.getElementsByTagName('a')
		if (pagescrolltop>1800){
			jp.style.display = "block"
		}else{
			jp.style.display = "none"
		}
		Array.prototype.slice.call(jpA).map(function(item){
			item.style.background = '#918888'
		})
		
		if (2689 > pagescrolltop  && pagescrolltop >= 1800) {
			jpA[0].style.background = 'red'
		} else if (3288 > pagescrolltop && pagescrolltop  >= 2689) {
			jpA[1].style.background = 'red'
		} else if (3841 > pagescrolltop && pagescrolltop  >= 3288) {
			jpA[2].style.background = 'red'
		} else if (4400 > pagescrolltop && pagescrolltop  >= 3841) {
			jpA[3].style.background = 'red'
		} else if (4970 > pagescrolltop && pagescrolltop  >= 4400) {
			jpA[4].style.background = 'red'
		} else if (5530 > pagescrolltop && pagescrolltop  >= 4970) {
			jpA[5].style.background = 'red'
		} else if (6080 > pagescrolltop && pagescrolltop  >= 5530) {
			jpA[6].style.background = 'red'
		} else if (6636 > pagescrolltop && pagescrolltop  >= 6080) {
			jpA[7].style.background = 'red'
		} else if (7190> pagescrolltop && pagescrolltop  >= 6636) {
			jpA[8].style.background = 'red'
		} else if (8190 > pagescrolltop && pagescrolltop  >= 7190) {
			jpA[9].style.background = 'red'
		} else if (9900 > pagescrolltop) {
			jpA[10].style.background = 'red'
		}
	}
//center banner
//^^出现-------------------------
	var bbtn = document.querySelectorAll(".bbtn");
	var img = document.querySelector(".banopa");
	var banner = document.querySelector('.banner')
	var bannerSet,cun//记录每次鼠标经过的图片index，清除定时器，再启动时，可以从当前这个开始
	again(2);
	for(var i =1;i<=bbtn.length;i++){//遍历每一个小圆点,鼠标经过清除定时器，对应小圆点变成红色
		bbtn[i-1].index = i;
		bbtn[i-1].onmousemove = function(){
			changeBanner(this.index);
		}
	}
	// 鼠标经过图片小圆点箭头清除定时器
	banner.onmouseover = function(){
		var img = this.querySelector('img').src
		cun = img.slice(img.length - 5,img.length-4)
		clearInterval(bannerSet);
	}
	banner.onmouseleave = function () {
		again(Number(cun) + 1)
	}
	// 封装定时器
	function again(j){	
		bannerSet = setInterval(function(){
			if(j>bbtn.length){
				j = 1;
			}		
			changeBanner(j);
			j++;
		},2000)
	}
	

	// 创造一个函数调用，改变图片，小圆点颜色
	function changeBanner(a){
		if(a>bbtn.length){
			a=1;
		}
		img.src = "img/banner" + a + ".jpg";
		for(var i = 0;i<bbtn.length;i++){
			if(i != a-1){
				bbtn[i].style.backgroundColor = "#fff";
			}else{
				bbtn[i].style.backgroundColor = "red";
			}
		}
	}
	
	// 左右箭头切换图片
	var arrowLeft = document.getElementsByClassName('arrow-l')[0]
	var arrowRight = document.getElementsByClassName('arrow-r')[0]
	var arrowPar = document.getElementsByClassName('banner')[0]
	arrowLeft.onclick = function(){
		clearInterval(bannerSet);
		cun--
		if(cun<1){
			cun=8
		}		
		changeBanner(cun)
	}
	arrowRight.onclick = function () {
		clearInterval(bannerSet);
		cun++
		if (cun >8) {
			cun = 1
		}
		changeBanner(cun)
	}


// ^^头部导航旁边的tit1左半部分隐藏，出现
	var makeup = document.querySelector("#makeup");
	var tit1 = document.querySelector(".tit1_son");
	makeup.onmousemove = function(){
		tit1.style.display = "block";
	}
	makeup.onmouseout = function(){
		transition = "0.5s"
		tit1.style.display = "none";
	}
	tit1.onmousemove = function(){
	
		tit1.style.display = "block";
	}
	tit1.onmouseout = function(){
		transition = "0.5s"
		tit1.style.display = "none";
	}
//^^秒杀区的brand
	var brandcir = document.querySelectorAll(".brandcir");//获取每个小点点数组
	var brandimg= document.querySelector(".brandimg");//获取图片
	 changePic(0)//调用changePic来使它当前的小圆点是红色，背景图第一张等同于 brandcir[0].style.backgroundColor='red';
	for(var i =0;i<brandcir.length;i++){
		//遍历每一个小点点
		brandcir[i].index = i;//解决闭包问题
		brandcir[i].onmouseover = function(){
			clearInterval(brandset)//鼠标经过小圆点清除定时器
			//console.log(i);//循环里面嵌套函数，闭包，i存在作用域的问题，识别不到
			//console.log(this.index);//[0,1]当前的索引
		  changePic(this.index)//调用changePic的函数，传当前的小圆点索引来获取图片地址和小圆点颜色
		 }
	}
	 	window.onload = function(){
		 	var x = 0
		 	brandset = setInterval(function(){//鼠标离开小圆点开启定时器
				// x = getNum(x);//调用getnum函数获取0或是1；
				// changePic(x);//调用changePic函数获取0或是1,每3秒改变一次圆点颜色
				// console.log(x);


				if(x >1){//精简第二次，不用创造函数获取1和0，直接判断，优化函数代码
					x=0;
				}
				changePic(x);
				x++;
			},1000)

		 }
	function changePic(num){
		 if(num== 1){
		   	brandcir[1].style.backgroundColor='red';//改变点击点的颜色
		    brandcir[0].style.backgroundColor='#342A2D';//没有被选中的点颜色
		    brandimg.src = "img/kil-" + (num + 1) + ".jpg";//选中图片的地址拼接,索引从0开始要加1地址
		   }
		   else{
		   	brandcir[0].style.backgroundColor='red';//改变点击点的颜色
		    brandcir[1].style.backgroundColor='#342A2D';//没有被选中的点颜色
			brandimg.src = "img/kil-" + (num + 1) + ".jpg";
		   }  
	}

//^^ skill 秒杀倒计时
	function getTimer(year,moth,day,hour,minute,second,x){  
		var endtime = new Date(year,moth,day,hour,minute,second); /*定义结束时间*/
		var nowtime = new Date();/*获取当前时间*/ 
		var dif = endtime.getTime()-nowtime.getTime();/*得到它们相差的时间*/ 
		 /*划分出时分秒*/ 
		// 每天每小时每分钟转换成毫秒数开始
		var mt = 1000 * 60;//minutes每分钟多少毫秒
		var ht = mt * 60;//hours每小时多少毫秒
		var dt = ht * 24;//day每天多少毫秒
		//每天的毫秒数结束
		var d = parseInt(dif/dt);
		var h = parseInt(dif%dt/ht);
		var m = parseInt(dif%dt%ht/mt);
		var s = parseInt(dif%dt%ht%mt/1000);
		// console.log(d)
		// console.log(h);
		if (x=="1") {
			return add0(h);
		}else if(x=="2"){
			return add0(m);
		}else if(x=="3"){
			return add0(s);
		}
	}
setInterval(function(){
	var now =  new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var date = now.getDate();
	var hours = now.getHours();

	var h = document.querySelector("#h")
    var m = document.querySelector("#m")
	var s = document.querySelector("#s")  
	
	if(hours<=16){
		h.innerHTML = getTimer(year,month,date,16,00,00,"1");
	}else{
		h.innerHTML = getTimer(year, month, date+1,16,00,00,"1");
	}   
	m.innerHTML = getTimer(year, month,date,16,00,00,"2");
	s.innerHTML = getTimer(year, month,date,16,00,00,"3");
},1000)


// 右侧新增双11 模块
// 1.key点击出现和X点击
var key = document.querySelector(".add-key");
var rightNav = document.getElementById("Rn");
var close = document.querySelector(".add-tittle-close");
var select = true;
key.onclick = function(){
	if(select){
		rightNav.style.right = "0";
	}else{
		rightNav.style.right = "-270px";
	}
	select = !select;
}
close.onclick = function(){
	rightNav.style.right = "-270px";
	select = !select;
}


// header右侧促销公告模块,小红线随着鼠标动
var bottline = document.getElementsByClassName('bottline')[0];
var newsTop = document.getElementsByClassName('news-t')[0];
var rightDemo = newsTop.getElementsByTagName('a');
var bdT = document.getElementsByClassName('bd-t')[0];
var bda = bdT.getElementsByTagName('a')
var bottomLine = document.getElementsByClassName('bottom-line')[0];

move(rightDemo, bottline)
move(bda,bottomLine)



// 封装函数，平移的线随着鼠标动，传入标签数组，和线的class名
function move(arrElement,line){
	Array.prototype.slice.call(arrElement).map(function (item) {
		item.onmouseover = function () {
			line.style.left = item.offsetLeft + 'px'
		}
	})
}


