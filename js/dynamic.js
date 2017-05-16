$(function(){
	$('.header .nav .menu .list').hover(function(){
		$(this).find('.submenu').slideDown('600');
	},function(){
		$(this).find('.submenu').slideUp('100');
	});
	
	
});