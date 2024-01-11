//navigation
function toggleMenu(){
    const togglemenu=document.getElementsByClassName(".toggleMenu");
    const navigation=document.getElementsByClassName(".navigation");
    togglemenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
//end navigation

//slider
var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      800: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});
// end slider