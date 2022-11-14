var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: !0,
  autoplay: { delay: 2500, disableOnInteraction: !1 },
  pagination: { el: ".swiper-pagination", clickable: !0 },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Navbar animée
const btnNav = document.querySelector(".responsive-nav-btn");
const listeNav = document.querySelector(".navbar_btn");
let imgBtn = document.querySelector(".responsive-nav-btn img");

btnNav.addEventListener("click", () => {
  listeNav.classList.toggle("navbar_btn");
});
