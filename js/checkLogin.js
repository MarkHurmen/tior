(function(){
	
	
	$(".closeImg").on('click',function(){
		$('#backImg').hide();
		hideMask();
		
    }); 
	
})();
var timer = null;
//Toast 弹窗提示函数
function toast (data) {
	clearTimeout(timer);
	$(".shade1").show();
	$(".shade1").css("display","block");
	$(".shade1 > p").html(data);
	timer = setTimeout(function() {
		$(".shade1").hide();
		$(".shade1 > p").html("");
		clearTimeout(timer);
	}, 2000);
}
//显示遮罩层  
function showMask(){     
    $("#mask").css("height",$(document).height());     
    $("#mask").css("width",$(document).width());     
    $("#mask").show(); 
   
}  
//隐藏遮罩层  
function hideMask(){     	          
   $("#mask").hide();     
} 
//获取id
function getId(){
    var url = window.location.href;
    return url.split("#")[1];	
}
//获取参数
function getprm(e){
    var url = window.location.href;
    return url.split("#")[e];	
}
function checkLogin(){
	$.ajax({
		url:'/rest/loginStatus',
		dataType:'JSON',
		async:false,
		type:'get',
		timeout:10000,
		success:function(obj){
			if(!obj.result){
				window.location.href="/front/eventCompetition/view/register.html";  
			}
		}
	});
}