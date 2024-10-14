<template>
    <section
      class="py-10 sm:py-40 px-5 md:px-0 container xl:max-w-screen-xl mx-auto text-center"
    >
      <h5 ref="headline" class="text-white font-medium font-dm-sans text-xl sm:text-3xl">
        We provide content from over 30 leading newspapers.
      </h5>
      <div
        ref="logosWrapper"
        class="grid grid-cols-3 md:grid-cols-6 items-center gap-6 md:gap-12 w-full mt-10 md:mt-24"
      >
        <NuxtImg sizes="100vw sm:50vw" src="/images/logos/1.png" alt="logos" />
        <NuxtImg sizes="100vw sm:50vw" src="/images/logos/2.png" alt="logos" />
        <NuxtImg sizes="100vw sm:50vw" src="/images/logos/3.png" alt="logos" />
        <NuxtImg sizes="100vw sm:50vw" src="/images/logos/4.png" alt="logos" />
        <NuxtImg sizes="100vw sm:50vw" src="/images/logos/5.png" alt="logos" />
        <NuxtImg sizes="100vw sm:50vw" src="/images/logos/6.png" alt="logos" />
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  const headline = ref(null);
  const logosWrapper = ref(null);
  
  onMounted(() => {
    // Animate text (headline) with scale and fade in
    gsap.fromTo(
      headline.value,
      { opacity: 0, scale: 0.5 }, // Start small and transparent
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headline.value,
          start: "top 90%", // Start animation when headline is 90% in view
          end: "top 40%", // End animation when headline reaches 40% of the viewport
          scrub: true,
        },
      }
    );
  
    // Animate the logos with rotation, fade, and stagger effect
    const images = logosWrapper.value.querySelectorAll("img");
    gsap.fromTo(
      images,
      { opacity: 0, rotate: -45, y: 100 }, // Start with rotation and shifted down
      {
        opacity: 1,
        rotate: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2, // Stagger the animations for each image
        scrollTrigger: {
          trigger: logosWrapper.value,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
          toggleActions: "play reverse play reverse", // Reverse on scroll back
        },
      }
    );
  });
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  