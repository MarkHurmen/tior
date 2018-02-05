(function () {
	//图片上传处理
	$('.uploadWorksBtn').on('click',function(){
		$("#file").on("change",function() {
			var $file = $(this);
			var fileObj = $file[0];
			var windowURL = window.URL || window.webkitURL;
			var dataURL;
			var $img = $("#preview");
			 
			if(fileObj && fileObj.files && fileObj.files[0]){
				dataURL = windowURL.createObjectURL(fileObj.files[0]);
				$img.attr('src',dataURL);
				}else{
				dataURL = $file.val();
				var imgObj = document.getElementById("preview");
				// 两个坑:
				// 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
				// 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
				imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
				imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;					
			} 
			showMask();
			$('#loading').show();
			ajaxFileUploadPic();
			$("#preview").show();
			$(".ajaxImg1").remove();
			$('.uploadWorksBtn').children('ul').remove();			
			$(".ajaxImg").remove();
			
		})	
		
	});
	
	function ajaxFileUploadPic() {   
		jQuery.ajaxFileUpload({
			url : '/rest/corps/uploadCerImg',
			fileElementId : 'file',
			dataType : 'json',
			type : "POST",
			data:{},
			cache : false,
			success : function(data){
				if(data.success){					
					$("#preview").attr('filepathId',data.data);
					$(".ajaxImg3").remove();
					$("#preview").before('<input class="ajaxImg3" id="file" type="file" name="cerfile" />');
					hideMask();
 					$('#loading').hide();
				}else{
					if(data.errMsg == "请先登录！"){
						hideMask();
	 					$('#loading').hide();
						window.location.href = "../view/register.html"; 
					}else{
						$(".ajaxImg3").remove();
						$("#preview").before('<input class="ajaxImg3" id="file" type="file" name="cerfile" />');
						timer1 = setTimeout(function() {
							hideMask();
		 					$('#loading').hide();
							$('#backImg').show();
							$('.pone').children('span').remove();
							$('.pone').html(data.errMsg);
							$('.pone').css({'border-bottom':'none','line-height':'3.625rem'});
							$('.ptwo').remove();
							clearTimeout(timer1);
						}, 1000); 
					}
				}
			},
			
		}); 
	 }  
	
	
})()


