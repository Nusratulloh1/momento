<template>
    <div>
      <div class="wrapper1">
        <!-- Render the images twice for seamless looping -->
        <div v-for="(image, index) in duplicatedImages" :key="index" class="box1">
          <img :src="image" alt="frame" class="frame-image1" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import gsap from "gsap";
  import image1 from "../assets/images/frames/1.png";
  import image2 from "../assets/images/frames/2.png";
  import image3 from "../assets/images/frames/3.png";
  import image4 from "../assets/images/frames/4.png";
  import image5 from "../assets/images/frames/5.png";
  import image6 from "../assets/images/frames/6.png";
  import image7 from "../assets/images/frames/7.png";
  import image8 from "../assets/images/frames/8.png";
  import image9 from "../assets/images/frames/9.png";
  
  // List of frame images
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
  
  // Duplicate the images array to create a seamless looping effect
  const all = [...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images];
  const duplicatedImages = [...all, ...all, ...all, ...all, ...all]
  
  onMounted(() => {
    let boxWidth = 500;
    if(window.innerWidth < 1280){
        boxWidth = 400
    }
    if(window.innerWidth < 992){
        boxWidth = 250
    }
    const totalWidth = boxWidth * images.length;
  
    // Infinite scroll animation for seamless looping
    gsap.to(".wrapper1", {
      duration: totalWidth / 150, // Adjust the speed (50px per second)
      ease: "none",
      x: `-=${totalWidth}`, // Move left by the total width of one set of images
      repeat: -1, // Infinite loop
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth) // Ensure a smooth wrap-around
      }
    });
  });
  </script>
  
  <style lang="scss" scoped>
  .wrapper1 {
    display: flex;
    /* flex-direction: column-reverse; */
    align-items: center;
    width: 100%;
    gap: 370px; 
    /* overflow: hidden; */
    position: relative;
    @media (max-width: 1280px) {
        gap: 270px;  
    }
    @media (max-width: 992px) {
        gap: 120px;    
    }
  }
  
  .box1 {
    width: 130px;
    height: 130px;
    flex-shrink: 0; /* Prevent shrinking */
    @media (max-width: 1280px) {
        width: 100px;
        height: 100px;  
    }
    @media (max-width: 992px) {
        width: 60px;
        height: 60px;  
    }
  }
  
  .frame-image1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  