const controls = document.querySelectorAll('.btn');
let currentItem = 0;
const slides = document.querySelectorAll('.slide');
let maxSlides = slides.length;

controls.forEach((btn) => {
   btn.addEventListener('click', (e) => {
      let isLeft = btn.classList.contains('left-btn');

      if (isLeft) {
         currentItem --;
      } else{
         currentItem ++;
      }

      if (currentItem >= maxSlides){
         currentItem = 0;
      } 

      if (currentItem < 0){
         currentItem = maxSlides - 1;
      }

      slides.forEach((slide) => slide.classList.remove('current-slide'));

      slides[currentItem].scrollIntoView({
         behavior: "smooth",
         inline: "center"
      });

      slides[currentItem].classList.add('current-slide');
   })
})