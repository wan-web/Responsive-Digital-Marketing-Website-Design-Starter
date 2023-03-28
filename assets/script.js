/*================Sticky Navigation Bar===============*/



/*================Navigation Bar Open/Close Toggle===============*/


/*================Close Navigation Bar on Link Click===============*/



/*================Testimonial Swiper initialization and configuration===============*/
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  mousewheel: true,
  keyboard: true,
});

/*================Scroll Reveal Animations===============*/
const martScroll = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: true
})

// scroll Home
martScroll.reveal('.home__data--title', {})
martScroll.reveal('.home__data--desc', {})
martScroll.reveal('.home__btn', {})
martScroll.reveal('.home__image', {})

//scroll About
martScroll.reveal('.about__image', {})
martScroll.reveal('.about__data', {})

//why choose us
martScroll.reveal('.whychooseus__tag', {})
martScroll.reveal('.whychooseus__title', {})
martScroll.reveal('.whychooseus__data', {})

//services
martScroll.reveal('.services__tag', {})
martScroll.reveal('.services__title', {})
martScroll.reveal('.services__item', {})
martScroll.reveal('.services__buttons', {})


//testimonials
martScroll.reveal('.testimonial__tag', {})
martScroll.reveal('.testimonial__title', {})
martScroll.reveal('.swiper', {})


//contact
martScroll.reveal('.contact__tag', {})
martScroll.reveal('.contact__title', {})
martScroll.reveal('.contact__form', {})


//footer
martScroll.reveal('.footer__container', {})
