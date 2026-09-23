// Preloader
window.addEventListener('load', function() {

    let preloader = document.querySelector('.preloader');

    preloader.classList.add('hide');

    setTimeout(function(){
        preloader.remove();
    }, 600);

});

// Animate on scroll
AOS.init({
  offset: 200,
  duration: 1000,
  once: true,
});

// Testimonials Slider
const swiperTestimonial = new Swiper(".testimonials__slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    allowTouchMove: true,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {

        // when window width is <= 0
        0: {
            slidesPerView: 1,
        },

        // when window width is <= 700px
        700: {
            slidesPerView: 1.2,
        },

        // when window width is <= 850px
        850: {
            slidesPerView: 1.4,
        },

        // when window width is <= 950px
        950: {
            slidesPerView: 1.5,
        },
        // when window width is < 1150px
        1150: {
            slidesPerView: 2,
        }
    }    
});

// Open and close mobile menu
const iconMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

if(iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  });
}

// Scroll to Sections
const scrollLinks = document.querySelectorAll('.menu__link, .scrollto');

if (scrollLinks.length > 0) {
  scrollLinks.forEach(scrollLink => {
    scrollLink.addEventListener('click', function(e) {
      const scrollLink = e.target;
      if(scrollLink.dataset.scrollto && document.querySelector(scrollLink.dataset.scrollto)) {
        const scrolltoBlock = document.querySelector(scrollLink.dataset.scrollto);
        const scrolltoBlockValue = scrolltoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

        if(menu.classList.contains('active')) {
          menu.classList.remove('active');
          iconMenu.classList.remove('active');
          document.querySelector('body').classList.remove('lock');
        }

        window.scrollTo({
          top:scrolltoBlockValue,
          behavior: 'smooth'
        });
        e.preventDefault();
      }
    });
  });
}

// Changes on Scroll
const scrollHeader = document.querySelector('.header');
const scrollButton = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  if(window.scrollY > 0) {
    scrollButton.classList.add('active');
    scrollHeader.classList.add('scroll');
  } else {
    scrollButton.classList.remove('active');
    scrollHeader.classList.remove('scroll');
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});