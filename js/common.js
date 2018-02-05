(function(){
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
})();
