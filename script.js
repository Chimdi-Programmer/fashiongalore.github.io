const Menuicon = document.querySelector('.Menu-icon')
        const Menuiconimage  = document.querySelector('.menu-icon img')
        const dropdownmenu = document.querySelector('.dropdown_menu')
        Menuicon.onclick = function(){
          dropdownmenu.classList.toggle('open')
        }


       
       
       
       
var swiper = new Swiper(".slide-content", {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 25,
            centerSlide: 'true',
            fade: 'true',
            grabCursor: 'true',
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
              Bullets: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            breakpoints:{
                0: {
                    slidesPerView: 1,
                },
                550: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
            },
          });