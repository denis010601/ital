var swiper = new Swiper(".hero-swiper", {
    effect: 'fade',
    pagination: {
      el: ".swiper-pagination",
      bulletClass: "swiper__bullet",
      bulletActiveClass: "swiper__bullet-active",
    },
    autoplay: {
      delay: 3000,
    },
    loop: true,
  });