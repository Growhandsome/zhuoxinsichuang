$(function(){
	$('.header .nav .menu .list').hover(function(){
		$(this).find('.submenu').slideDown('600');
	},function(){
		$(this).find('.submenu').slideUp('100');
	});
});


$(function(){
	$(document).scroll(function(){
		if($(this).scrollTop() > 500){
			$('.floating_sign').fadeIn();
		}else{
			$('.floating_sign').fadeOut();
		};	
	});
	$('.floating_sign .top_arrow').click(function(){
		$(document.body).animate({
			scrollTop:0
		})
	});
});