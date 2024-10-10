<template>
    <section class="h-[60vh] flex items-center top-section">
      <div class="px-5 md:px-0 container lg:max-w-6xl mx-auto text-center">
        <h1 ref="title" class="text-white text-[40px] sm:text-[60px] lg:text-[80px] font-bold lg:leading-[92px]  opacity-0">
          All news, like a moments
        </h1>
        <p ref="description" class="text-[#838383] max-w-[869px] mx-auto !font-dm-sans text-base sm:text-lg lg:text-[31px]  lg:leading-[42px] font-normal mt-4 opacity-0">
          With our advanced AI technology, we present news as concise moments, making it easier than ever to stay connected with the world.
        </p>
        <button ref="button" class="mt-16 text-black bg-white rounded-full py-3 sm:py-4 px-5 sm:px-7 font-bold font-dm-sans hover:opacity-90  sm:text-xl opacity-0">
          Download Momento
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  const title = ref(null);
  const description = ref(null);
  const button = ref(null);
  let isAnimatedIn = false; // Track if elements have been animated in
  
  // Function to animate elements when they scroll into view
  const animateElementsIn = () => {
    const elements = [title.value, description.value, button.value];
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 5,
      stagger: 0.2,
      ease: 'power2.out',
    });
  };
  
  // Function to animate elements when they scroll out of view
  const animateElementsOut = () => {
    const elements = [title.value, description.value, button.value];
    gsap.to(elements, {
      opacity: 0,
      y: 50, // Adjust the y value for the exit animation
      duration: 1,
      stagger: 0.2,
      ease: 'power2.in',
    });
  };
  
  // Function to handle scroll animations
  const handleScroll = () => {
    const section = title.value?.parentNode;
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
  
      if (sectionTop < viewportHeight && sectionTop > 0) {
        // Element is in view
        if (!isAnimatedIn) {
          animateElementsIn();
          isAnimatedIn = true; // Mark as animated in
        }
      } else {
        // Element is out of view
        if (isAnimatedIn) {
          animateElementsOut();
          isAnimatedIn = false; // Mark as animated out
        }
      }
    }
  };
  
  onMounted(() => {
    // Check scroll position on mount
    handleScroll();
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  </script>
  
  <style>
  /* Add any additional styles here */
  </style>
  