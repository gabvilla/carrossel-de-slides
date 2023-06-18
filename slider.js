const slides = document.querySelectorAll('.slide');

slides.forEach((slide, indx) => {
   slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector('.right-btn');
let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener('click', function() {
   if (curSlide === maxSlide){
      curSlide = 0;
   } else{
      curSlide++;
   }

   slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
   })
})

const prevSlide = document.querySelector('.left-btn');

prevSlide.addEventListener('click', function() {
   if (curSlide === 0){
      curSlide = maxSlide;
   } else{
      curSlide--;
   }

   slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
   })
})


