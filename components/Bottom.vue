<template>
    <section class="h-screen flex items-center">
      <div class="px-5 md:px-0 container mx-auto xl:max-w-screen-xl">
        <div
          ref="contentWrapper"
          class="flex items-center flex-wrap md:flex-nowrap justify-center md:justify-between gap-20 sm:gap-24"
        >
          <div ref="logo">
            <LogoAnim ref="logo" class="w-1/2 md:w-[471px]" />
          </div>
          <h6
            ref="headline"
            class="font-semibold font-dm-sans text-center text-4xl sm:text-6xl lg:text-[84px] md:leading-[92px] text-white max-w-[547px]"
          >
            Stay in touch with the world.
          </h6>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import LogoAnim from "./LogoAnim.vue";
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  const logo = ref(null);
  const headline = ref(null);
  const contentWrapper = ref(null);
  
  onMounted(() => {
    // Animate logo with scale and rotation
    gsap.fromTo(
      logo.value,
      { scale: 0.8, rotation: 10, opacity: 0 }, // Start smaller, rotated and invisible
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentWrapper.value,
          start: "top 50%", // Start animation when the logo is 90% into view
          end: "top 50%", // End animation when it is halfway into view
          scrub: true,
          toggleActions: "play reverse play reverse", // Play forward on scroll down and reverse on scroll up
        },
      }
    );
  
    // Animate headline with scale and rotation
    gsap.fromTo(
      headline.value,
      { scale: 0.8, rotation: 10, opacity: 0 }, // Start smaller, slightly rotated and invisible
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentWrapper.value,
          start: "top 65%", // Start animation when the headline is 85% into view
          end: "top 50%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
  </script>
  
  <style scoped>
  /* Optional additional styling */
  </style>
  