 $(function(){
 var swiper = new Swiper('.gallery .gallery_inner ', {
    slidesPerView: 4,//보여지는 갤러리 수
    spaceBetween: 60,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
	  
      
      navigation: {//화살표 버튼
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.gallery .swiper-pagination',
        type: "progressbar",
      },
    });

    var swiper = new Swiper('.gallery2 .gallery_inner ', {
      slidesPerView: 1,//보여지는 갤러리 수
      spaceBetween: 0,//갤러리 사이 간격
      speed: 1500,//버튼을 슬라이드가 넘어가는 시간
      
        
        navigation: {//화살표 버튼
          nextEl: '.gallery2 .swiper-button-next',
          prevEl: '.gallery2 .swiper-button-prev',
        },
       
      });
});