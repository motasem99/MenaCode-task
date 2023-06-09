function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

$('.owl-carousel').owlCarousel({
  // loop: true,
  margin: 10,
  // autoplay: true,
  nav: true,
  navText: [
    "<div class='nav-btn prev-slide'></div>",
    "<div class='nav-btn next-slide'></div>",
  ],
  // autoplayTimeout: 2000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$('.owl-carousel.second').owlCarousel({
  // loop: true,
  margin: 10,
  // autoplay: true,
  nav: true,
  navText: [
    "<div class='nav-btn prev-slide'></div>",
    "<div class='nav-btn next-slide'></div>",
  ],
  // autoplayTimeout: 2000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
