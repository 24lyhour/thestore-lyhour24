
  // scroll-reveal>>>>>>

//   ScrollReveal().reveal('.mybox3', {
//     duration: 1000,   // Duration of the animation (in ms)
//      distance: '100px', // Distance the element will travel when revealed
//      easing: 'ease-in-out', // Easing function
// });



const sr = ScrollReveal({
  distance: '100px',
  duration: 1000,
  delay:100,
  reset: true, // Corrected by adding a comma here
  easing: 'ease-in-out',
});

sr.reveal('.mybox3', { delay: 200, origin: 'bottom' }); 
sr.reveal('.mybox2', { delay: 250, origin: 'bottom' }); 
sr.reveal('.twobox',{ delay: 400, origin: 'right' });
sr.reveal('.mybox',{delay:350,origin:'left'});


// footer reveal-scroll>>>
sr.reveal('.downnabar',{delay:200, origin:'top'});
sr.reveal('.leftnabav', {delay: 250, origin:'bottom'});
sr.reveal('.left', {delay: 300, origin:'top'});
sr.reveal('.name',{delay : 350, origin:'bottom'});



sr.reveal('.rightnabav', {delay: 350, origin:'top'});
sr.reveal('.Table', {delay: 400, origin:'bottom'});

sr.reveal('.rightnabav', {delay: 350, origin:'top'});
sr.reveal('.Table', {delay: 400, origin:'bottom'});
sr.reveal('.full-screen', {delay: 300, origin:'top'});
sr.reveal('.span', {delay:400, origin:'bottom'});



// slider>>>>>

 sr.reveal('.slider-container', {delay:400, origin:'top'});
// sr.reveal('.slider', {delay:400, origin:'bottom'});
sr.reveal('.prev-btn', {delay:400, origin:'left'});
sr.reveal('.next-btn',{delay:450, origin:'right'});

// slider >>>>

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = slider.querySelectorAll("img");
  const totalImages = images.length;

  let currentIndex = 0;
  let autoScrollInterval;

  // Auto-scroll function
  const startAutoScroll = () => {
    console.log("Auto-scroll started");
    autoScrollInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      console.log(`Auto-scroll to image index: ${currentIndex}`);
      updateSlider();
    }, 3000); // Change every 3 seconds
  };

  const stopAutoScroll = () => {
    console.log("Auto-scroll stopped");
    clearInterval(autoScrollInterval);
  };

  // Update the slider position
  const updateSlider = () => {
    const offset = -currentIndex * 100; // Assuming images are full width
    slider.style.transform = `translateX(${offset}%)`;
    console.log(`Slider moved to offset: ${offset}%`);
  };

  // Button click events
  prevBtn.addEventListener("click", () => {
    stopAutoScroll();
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    console.log(`Previous button clicked. New index: ${currentIndex}`);
    updateSlider();
    startAutoScroll();
  });

  nextBtn.addEventListener("click", () => {
    stopAutoScroll();
    currentIndex = (currentIndex + 1) % totalImages;
    console.log(`Next button clicked. New index: ${currentIndex}`);
    updateSlider();
    startAutoScroll();
  });

  // Hover events for the slider
  slider.addEventListener("mouseenter", stopAutoScroll);
  slider.addEventListener("mouseleave", startAutoScroll);

  // Hover effects for images
  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      console.log("Image hovered:", image.src);
      // Apply hover effects: Change brightness and add a color overlay
      image.style.filter = "brightness(1.2) saturate(1.5)";
      image.style.transition = "filter 0.3s ease";
    });

    image.addEventListener("mouseleave", () => {
      console.log("Image hover ended:", image.src);
      // Revert to original
      image.style.filter = "none";
    });
  });

  // Initialize auto-scroll
  startAutoScroll();
});
