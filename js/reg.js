var inp = document.querySelectorAll(".inp");
var attention = document.querySelectorAll(".attention");
// 第二个for放函数里，和上一个循环的每一个比较
	for(var i = 0;i<=inp.length;i++){
		inp[i].index = i;
		inp[i].onfocus = function(){
			for(var j = 0;j<=attention.length;j++){
				if(this.index == j){
					attention[j].style.opacity = 1;
					this.placeholder = ''	
				}else{
					attention[j].style.opacity =0;
				}
			}
		}
		inp[i].onblur = function(){
			for(var j = 0;j<=attention.length;j++){
				if(this.placeholder==''){
					this.placeholder = '请输入'	
				}else if(this.value !=''){
					attention[j].style.opacity = 1;
				}
			}
		}
	}

// // 正则 用户名  支持中文、字母、数字、"-" "_"的组合，4到20个字符
// function checkUserName(a){
// 	var pattern = /^([\u4e00-\u9fa5]|\w){4,20}$/;
// 	return pattern.test(a);
// }
// var username = document.querySelector("#userName");
// var text1 = document.querySelector(".text1");
// username.onfocus = function(){
// 	if(username.value==""){
// 		console.log(1);
// 		text1.innerHTML = "支持汉字、字母、数字、“-”“_”的组合，4-20个字符";
// 		checkUserName(username.value);
		
// 	}else{
		
// 	}
	
// }

