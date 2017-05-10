//banner
$(function(){
	var img = ['src/img/banner01_bg.jpg','src/img/banner02_bg.jpg','src/img/banner01_bg.jpg']
	var index=0;
	$('.banner .banner_btn .dot .left_arrow').click(function(){
		index--;
		if(index<0){
			index=img.length-1;
		}
		active();
	});
	$('.banner .banner_btn .dot .right_arrow').click(function(){
		index++;
		if(index>img.length-1){
			index=0;
		}
		active();
	});
	$('.banner .banner_btn .dot .center_arrow span').click(function(){
		index = $(this).index();
		active();
	});
	
	function active(){
		$('.banner .banner_btn .dot span').css({background:'#fff'});
		$('.banner .banner_btn .dot span').eq(index).css({background:'#336089'});
		$('.banner img').attr('src',img[index]);
	};

});



$(function(){
	$('.header .nav .menu .list').hover(function(){
		$(this).find('.submenu').slideDown('600');
	},function(){
		$(this).find('.submenu').slideUp('100');
	});
	
	
})