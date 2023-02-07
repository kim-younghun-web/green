$(function(){
	$('.tabcontent > div').hide();
	$('.tabnav a').click(function () {
		$('.tabcontent > div').hide().filter(this.hash).fadeIn();
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  });


  $(function(){
    $('.polar a').click(function(){
        $('.pop1').fadeIn();//show();
    });

	$('.turtle a').click(function(){
        $('.pop2').fadeIn();//show();
    });

	$('.tiger a').click(function(){
        $('.pop3').fadeIn();//show();
    });

	$('.penguin a').click(function(){
        $('.pop4').fadeIn();//show();
    });



    $('.close').click(function(){
        $('.popup').fadeOut();//hide();
    });
});



$(function(){
    $('.lnb_inner h2').click(function(){
        $('.popup2').show();//show();
        $('.popup1').hide();
    });

	$('.popup2 h2').click(function(){
        $('.popup3').show();//show();
        $('.popup2').hide();
    });

	$('input[type="button"]').click(function(){
        $(this).addClass('toggle').siblings().removeClass('toggle');
    });
	
    $('.popup3 h2').click(function(){
        $('.pic').show();//show();
        $('.popup3, .popup2').hide();
    });


});


//
$(function(){
    $('#tab01 a:nth-child(1),#tab02 a:nth-child(1)').click(function(){
        $('.pop11').fadeIn();//show();
    });

	$('#tab01 a:nth-child(2),#tab02 a:nth-child(2').click(function(){
        $('.pop22').fadeIn();//show();
    });

	$('#tab01 a:nth-child(3),#tab02 a:nth-child(3)').click(function(){
        $('.pop33').fadeIn();//show();
    });

	$('#tab01 a:nth-child(4),#tab03 a:nth-child(1)').click(function(){
        $('.pop44').fadeIn();//show();
    });



    $('.close').click(function(){
        $('.popup').fadeOut();//hide();
    });
}); 
