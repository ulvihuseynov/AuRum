var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
   
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let menuBtn=document.querySelector("#ham-btn");
  let resMenu=document.querySelector("#res-menu")
 
  menuBtn.addEventListener("click",()=>{
    resMenu.classList.toggle("active")
  });
  window.onscroll = () => {
    resMenu.classList.remove("active");
};

