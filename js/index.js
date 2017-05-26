//banner
$(function() {
    var img = ['src/img/banner01_bg.jpg', 'src/img/banner02_bg.jpg', 'src/img/banner01_bg.jpg'];
    var index = 0;
    $('.banner .banner_btn .dot .left_arrow').click(function() {
        index--;
        if (index < 0) {
            index = img.length - 1;
        }
        active();
    });
    $('.banner .banner_btn .dot .right_arrow').click(function() {
        index++;
        if (index > img.length - 1) {
            index = 0;
        }
        active();
    });
    $('.banner .banner_btn .dot .center_arrow span').click(function() {
        index = $(this).index();
        active();
    });

    function active() {
        $('.banner .banner_btn .dot span').css({ background: '#fff' });
        $('.banner .banner_btn .dot span').eq(index).css({ background: '#336089' });
        $('.banner .img').attr('src', img[index]);
        switch (index) {
            case 0:
                imgShow();
                break;
            case 1:
                imgShow1();
                break;
            case 2:
                imgShow2();
                break;
        }
        //		if(index==0){
        //			alert(index)
        //			//imgShow();
        //		}else if(index==1)
        //		{
        //			alert(index)
        //			//imgShow1();
        //			
        //		}else(index==2)
        //		{
        //			alert(index)
        //			//imgShow2();
        //			
        //		};
    };

    function imgShow() {
        imgShow4();
        $('.banner .img_cont').hide();
        $('.banner .img_cont2').hide();
        $('.banner .img_cont3').hide();
        $('.banner .img_cont').show();
        $('.banner .img_cont .img_1').stop().animate({
            left: 0
        });
        $('.banner .img_cont .img_2').stop().animate({
            right: 0
        });
        //imgShow();
    };

    function imgShow1() {
        imgShow4();
        $('.banner .img_cont').hide();
        $('.banner .img_cont2').hide();
        $('.banner .img_cont3').hide();
        $('.banner .img_cont2').show();
        $('.banner .img_cont2 .img_c1').stop().animate({
            left: 0
        });
        $('.banner .img_cont2 .img_c2').stop().animate({
            right: 0
        });
    };

    function imgShow2() {
        imgShow4();
        $('.banner .img_cont').hide();
        $('.banner .img_cont2').hide();
        $('.banner .img_cont3').hide();
        $('.banner .img_cont3').show();
        $('.banner .img_cont3 .img_o1').stop().animate({
            left: 0
        });
        $('.banner .img_cont3 .img_o2').stop().animate({
            right: 0
        });
    };

    function imgShow4() {
        $('.banner .img_cont .img_1').css({
            left: -640
        });
        $('.banner .img_cont .img_2').css({
            right: -502
        });
        $('.banner .img_cont2 .img_c1').css({
            left: -320
        });
        $('.banner .img_cont2 .img_c2').css({
            right: -520
        });
        $('.banner .img_cont3 .img_o1').css({
            left: -640
        });
        $('.banner .img_cont3 .img_o2').css({
            right: -502
        });
        //		$('.banner .img_cont .img_o2').css({
        //			right:-502
        //		});
    }


    //	function imgShow(){
    //		$('.banner .img_cont').show();
    ////		$('.banner .img_cont .img_2').css('display','block');
    ////		$('.banner .img_cont .img_3').css('display','block');
    //		$('.banner .img_cont .img_1').animate({
    //			left:0
    //		},600);
    //		$('.banner .img_cont .img_2').animate({
    //			right:0
    //		},600);
    //		$('.banner .img_cont .img_c1').hide({
    //			left:-320
    //		});
    //		$('.banner .img_cont .img_c2').hide({
    //			right:-520
    //		});
    //		$('.banner .img_cont .img_o1').hide({
    //			right:-640
    //		});
    //		$('.banner .img_cont .img_o2').hide({
    //			right:-502
    //		});
    //		$('.banner .img_cont2').hide();
    //		$('.banner .img_cont3').hide();
    //	};
    //	imgShow();
    //	function img1Show(){
    //		$('.banner .img_cont2').show();
    ////		$('.banner .img_cont2 .img_c2').show();
    ////		$('.banner .img_cont2 .img_c3').show();
    //		$('.banner .img_cont2 .img_c1').animate({
    //			left:'0'
    //		},300);
    //		$('.banner .img_cont2 .img_c2').animate({
    //			right:'0'
    //		},300);
    //		$('.banner .img_cont').hide();
    //		$('.banner .img_cont3').hide();
    //	};
    ////	img1Show();
    //	function img2Show(){
    //		$('.banner .img_cont3').show();
    ////		$('.banner .img_cont3 .img_o2').show();
    ////		$('.banner .img_cont3 .img_o3').show();
    //		$('.banner .img_cont3 .img_o1').animate({
    //			left:'0'
    //		},300);
    //		$('.banner .img_cont3 .img_o2').animate({
    //			right:'0'
    //		},300);
    //		$('.banner .img_cont').hide();
    //		$('.banner .img_cont2').hide();
    //	};
    //	img2Show();
    //		function play(){
    //			if(index=0){
    //				imgShow();
    //			}else if(index=1){
    //				img1Show();
    //			}else{
    //				img2Show();
    //			}
    //		};
});



$(function() {
    $('.header .nav .menu .list').hover(function() {
        $(this).find('.submenu').slideDown('600');
    }, function() {
        $(this).find('.submenu').slideUp('100');
    });


});
//点击回顶部
$(function() {
    $(document).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.floating_sign').fadeIn();
        } else {
            $('.floating_sign').fadeOut();
        };
    });
    $('.floating_sign .top_arrow').click(function() {
        $(document.body).animate({
            scrollTop: 0
        })
    });
});

//业务范围
$(function() {
    $('.business .platform .click_bg').click(function() {
        $('.business .platform .none .none_one').toggle();
        $('.business .platform .none .none_twe').toggle();
    });
    // $('.business .platform .click_bg').click(function(){
    // 	$('.business .platform .none').css({
    // 		display:none
    // 	});
    // });

});