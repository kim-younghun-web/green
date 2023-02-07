// const options = {
//   root: null, // viewport
//   rootMargin: "0px",
//   threshold: 1.0,  // 50%가 viewport에 들어와 있어야 callback 실행
// }

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     } 
//   });
// }, options);

// const boxList = document.querySelectorAll('.b');

// // 반복문을 돌려 모든 DOM에 적용
// boxList.forEach(el => observer.observe(el));


$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 2700) {
      $('.b').addClass('active');
    } else {
      $('.b').removeClass('active');
    }

    if (height > 4600) {
        $('.b2').addClass('active2');
      } else {
        $('.b2').removeClass('active2');
      }
});