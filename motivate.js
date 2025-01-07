const sr = ScrollReveal({
  distance: '100px',
  duration: 1000,
  delay:100,
  reset: true, // Corrected by adding a comma here
  easing: 'ease-in-out',
});

sr.reveal('.mybox3', { delay: 200, origin: 'top' }); 
sr.reveal('.mybox4', { delay: 250, origin: 'bottom' }); 
sr.reveal('.swiper', {delay:300, origin:'bottom'});


// footer reveal-scroll>>>
sr.reveal('.downnabar',{delay:200, origin:'top'});
sr.reveal('.leftnabav', {delay: 250, origin:'bottom'});
sr.reveal('.left', {delay: 300, origin:'top'});
sr.reveal('.name',{delay : 350, origin:'bottom'});



sr.reveal('.rightnabav', {delay: 350, origin:'top'});
sr.reveal('.Table', {delay: 400, origin:'bottom'});
sr.reveal('.full-screen', {delay: 300, origin:'top'});
sr.reveal('.span', {delay:400, origin:'bottom'});
// sr.reveal('.btn', {delay:450, origin:'top'});




          // Auto slider >>>>>>

          document.addEventListener("DOMContentLoaded", () => {
            const swiper = new Swiper('.swiper', {
              // Optional parameters
              direction: 'horizontal',
              loop: true,
          
              // Autoplay feature
              autoplay: {
                delay: 4000, // Time between slides in milliseconds (e.g., 3000ms = 3 seconds)
                disableOnInteraction: false, // Keeps autoplay running even after user interaction
              },
          
              // If we need pagination
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
          
              // Navigation arrows
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
          
              // And if we need scrollbar
              scrollbar: {
                el: '.swiper-scrollbar',
              },
            });
          });
          
          

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });



  // document.addEventListener("DOMContentLoaded", () => {
  //   const swiper = new Swiper('.swiper', {
  //     // Optional parameters
  //     direction: 'horizontal',
  //     loop: true,

  //     // If we need pagination
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },

  //     // Navigation arrows
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },

  //     // And if we need scrollbar
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //     },
  //   });
  // });

