$(function () {
   $('.i1').mouseover(function () {
      $(this).stop().css({
         'left': '0',
         'top':'0%',
      });
      $('.i2').stop().css({
         'right': '-40%',
         'top':'0%',
      });
      
      $('.i3').stop().css({
         'left':'0',
         'bottom':'-40%',
      });

      $('.i4').stop().css({
         'right':'-40%',
         'bottom':'-40%',
      });
    
   });

   $('.i2').mouseover(function () {
      $(this).stop().css({
         'right': '0',
         'top':'0%',
      });
      $('.i1').stop().css({
         'left': '-40%',
         'top':'0%',
      });
      $('.i3').stop().css({
         'left':'-40%',
         'bottom':'-40%',
      });
      $('.i4').stop().css({
         'right':'0%',
         'bottom':'-40%',
      });
   });


   $('.i3').mouseover(function () {
      $(this).stop().css({
         'left': '0',
         'bottom': '0',
      });

      $('.i4').stop().css({
         'right': '-40%',
         'bottom': '0',
      });

      $('.i1').stop().css({
         'top': '-40%',
         'left':'0',
      });

      $('.i2').stop().css({
         'top':'-40%',
         'right':'-40%',
      });
   });

   $('.i4').mouseover(function () {
      $(this).stop().css({
         'right': '0',
         'bottom': '0',
      });

      $('.i3').stop().css({
         'left': '-40%',
         'bottom': '0',
      });

      $('.i1').stop().css({
         'top': '-40%',
         'left':'-40%',
      });

      $('.i2').stop().css({
         'top':'-40%',
         'right':'0',
      });
   });

});