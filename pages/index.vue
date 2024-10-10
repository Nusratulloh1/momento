<template>
  <div class="scroll-container">
    <!-- First section -->
    <section class=" h-[60vh] flex items-center top-section">
      <div class="px-5 md:px-0 container lg:max-w-6xl mx-auto text-center">
        <h1
          class="text-white text-[40px] sm:text-[60px] lg:text-[80px] font-bold lg:leading-[92px] transition-all"
        >
          All news, like a moments
        </h1>
        <p
          class="text-[#838383] max-w-[869px] mx-auto !font-dm-sans text-base sm:text-lg lg:text-[31px] lg:leading-[42px] font-normal mt-4 transition-all"
        >
          With our advanced AI technology, we present news as concise moments,
          making it easier than ever to stay connected with the world.
        </p>
        <button
          class="mt-16 text-black bg-white rounded-full py-3 sm:py-4 px-5 sm:px-7 font-bold font-dm-sans hover:opacity-90 transition-all sm:text-xl"
        >
          Download Momento
        </button>
      </div>
    </section>

    <!-- Phone scrolling section with pinned background -->
    <section class=" h-screen phone-scroll grid lg:gap-20">
      <div
        class="bg !bg-black lg:!bg-cover pinned-bg flex flex-col justify-center gap-20 sm:gap-32  overflow-hidden"
      >
<Slider   />
<Slider2 />
          
      </div>
      <div class="sticky h-screen" >
        <img
          class="phone-1 mt-[22%] md:mt-auto w-1/2 sm:w-[30%] lg:w-[27%] xl:w-[22%] mx-auto"
          src="../assets/images/phones/1.png"
          alt="Phone 1"
        />
      </div>
      <div class="sticky  h-screen" style="bottom: 0">
        <img
          class="phone-2 mt-[22%] md:mt-auto w-1/2 sm:w-[30%] lg:w-[27%] xl:w-[22%] mx-auto"
          src="../assets/images/phones/2.png"
          alt="Phone 2"
        />
      </div>
    </section>

    <section class="h-screen "></section>
    <!-- <section class="h-screen"></section> -->

    <!-- Third section -->

    <section
      class="py-10 sm:py-40 px-5 md:px-0 container xl:max-w-screen-xl mx-auto text-center"
    >
      <h5 class="text-white font-medium font-dm-sans text-xl sm:text-3xl">
        We provide content from over 30 leading newspapers.
      </h5>
      <div
        class="grid grid-cols-3 md:grid-cols-6 items-center gap-6 md:gap-12 w-full mt-10 md:mt-24"
      >
        <img src="../assets/images/logos/1.png" alt="logos" />
        <img src="../assets/images/logos/2.png" alt="logos" />
        <img src="../assets/images/logos/3.png" alt="logos" />
        <img src="../assets/images/logos/4.png" alt="logos" />
        <img src="../assets/images/logos/5.png" alt="logos" />
        <img src="../assets/images/logos/6.png" alt="logos" />
      </div>
    </section>
    <section class=" h-[90vh] sm:h-screen mt-10 flex items-center phone-changer">
      <div class="py-10 sm:py-40 px-5 md:px-0 container xl:max-w-screen-xl mx-auto">
        <div class="grid md:grid-cols-2 items-center gap-10 md:gap-0 lg:gap-6">
          <template v-for="phone in phones" :key="phone.index">
            <img
              v-if="phone.index == activePhone"
              :class="`phones-${
                activePhone + 1
              } w-[40%] sm:w-[30%] md:w-[50%] m-auto`"
              :src="phone.img"
              alt="phones"
            />
          </template>
          <div class="relative">
            <div class="h-[220px] sm:h-[280px] md:h-[320px]">
              <div v-for="phone in phones" :key="phone.index">
                <div v-if="phone.index == activePhone">
                  <h4
                    :class="`title-${
                      activePhone + 1
                    } text-white font-bold text-xl sm:text-2xl lg:text-3xl max-w-[429px] mx-auto md:ml-0`"
                  >
                    {{ phone.title }}
                  </h4>
                  <p
                    :class="`desc-${
                      activePhone + 1
                    } max-w-[427px] mx-auto md:ml-0 text-[#FFFFFF80] font-dm-sans font-normal text-xs sm:text-sm lg:text-base lg:leading-6 tracking-[-0.34px] mt-5`"
                  >
                    {{ phone.desc }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex items-center justify-center w-full md:justify-start flex-wrap gap-4 absolute"
            >
              <button
                @click="changePhone(i)"
                v-for="(menu, i) in menus"
                :key="i"
                :class="{ '!text-black !bg-white': activePhone == i }"
                class="text-[#FFFFFF8F] bg-[#2E2E2EB2] rounded-full py-2 sm:py-3 px-5 font-bold font-dm-sans hover:opacity-90 transition-all text-sm"
              >
                {{ menu }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="h-screen"></section>
    <section class="h-screen sm:mt-10 flex items-center">
      <div class="px-5 md:px-0 container mx-auto xl:max-w-screen-xl">
        <div
          class="flex items-center flex-wrap md:flex-nowrap justify-center md:justify-between gap-20 sm:gap-24"
        >
          <Logo class="w-1/2 md:w-[471px]" />
          <h6
            class="font-semibold font-dm-sans text-center text-4xl sm:text-6xl lg:text-[84px] md:leading-[92px] text-white max-w-[547px]"
          >
            Stay in touch with the world.
          </h6>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from "vue";

// import  from "nuxt-swiper/";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "../components/Slider.vue"
import Slider2 from "../components/Slider2.vue"
// Import Swiper styles
import "swiper/css";
import Logo from "~/components/Logo.vue";
import img3 from "../assets/images/phones/3.png";
import img4 from "../assets/images/phones/4.png";
import img5 from "../assets/images/phones/5.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const activePhone = ref(0);
const menus = ["Personalise feed", "Moments", "Gamification"];
// const innerWidth = ref(window.innerWidth)
const phones = [
  {
    index: 0,
    title: "Personalise your feed with our trending categories",
    desc: "Customize your news experience by selecting from our trending categories, ensuring your feed is tailored to your interests.",
    img: img3,
  },
  {
    index: 1,
    title: "Capture news like a moments with AI",
    desc: "Experience the essence of the latest news through our AI-driven summaries. Our app distills lengthy articles into concise news moments, allowing you to stay informed quickly and easily. Enjoy a streamlined news feed or explore our shorts-like format for quick updates on the go. Find the method that suits you best and stay effortlessly connected with the world.",
    img: img4,
  },
  {
    index: 2,
    title: "Stay connected with the world through gamification",
    desc: "Engage with global news in a fun and interactive way. Our app uses gamification to make staying informed exciting and enjoyable. Earn rewards, complete challenges, and track your progress as you explore the latest news stories tailored to your interests.",
    img: img5,
  },
];
// watch(activePhone, (newValue, oldValue) => {
//   if (newValue !== oldValue) {
//     changePhone(newValue);
//   }
// });
const changePhone = (index: number) => {
  // Animate the text associated with the active phone
  const currentTitle = document.querySelector(
    `.title-${activePhone.value + 1}`
  );
  const currentDesc = document.querySelector(`.desc-${activePhone.value + 1}`);
  const newTitle = document.querySelector(`.title-${index + 1}`);
  const newDesc = document.querySelector(`.desc-${index + 1}`);

  gsap.fromTo(
    currentTitle,
    { opacity: 1 },
    {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.to(newTitle, { opacity: 1, duration: 1 });
      },
    }
  );

  gsap.fromTo(
    currentDesc,
    { opacity: 1 },
    {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.to(newDesc, { opacity: 1, duration: 1 });
      },
    }
  );
  // Animate the phone image
  gsap.fromTo(
    `.phones-${activePhone.value + 1}`,
    { opacity: 1 },
    {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        activePhone.value = index; // Update active phone

        gsap.to(`.phones-${activePhone.value + 1}`, {
          opacity: 1,
          // scale: 1,
          duration: 1,
        });
      },
    }
  );
};
onMounted(() => {
  // Pin the background image for the entire duration of the phone-scroll section
  ScrollTrigger.create({
    trigger: ".phone-scroll",
    start: "top top",
    end: "bottom top",
    pin: ".pinned-bg", // Pin the background element
    scrub: true,
  });

  // Parallax effect for the phones as you scroll
  gsap.to(".phone-1", {
    y:  40, // Moves the first phone upwards
    ease: "elastic.out", // Easing function
    scrollTrigger: {
      trigger: ".phone-scroll",
      start: "top bottom",
      end: "bottom top",
      scrub: true, // Makes it move based on scroll
    },
  });

  gsap.to(".phone-2", {
    y:  0 , // Moves the second phone upwards with more intensity
    ease: "elastic.out", // Easing function
    scrollTrigger: {
      trigger: ".phone-scroll",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  const phoneChangerTrigger = ScrollTrigger.create({
    trigger: ".phone-changer",
    start: "top top", // Start pinning when the top of the section hits the top of the viewport
    end: "bottom top", // Stop pinning when the bottom of the section hits the top of the viewport
    pin: true, // Pin this section
    pinSpacing: false, // Don't add spacing when pinned
    onUpdate: (self) => {
      // Calculate the scroll progress
      const progress: any = self.progress.toFixed(2); // Progress value from 0 to 1

      // Determine which phone to show based on progress
      if (progress >= 0 && progress < 0.33) {
        if (activePhone.value !== 0) {
          changePhone(0);
        }
      } else if (progress >= 0.33 && progress < 0.66) {
        if (activePhone.value !== 1) {
          changePhone(1);
        }
      } else if (progress >= 0.66 && progress <= 1) {
        if (activePhone.value !== 2) {
          changePhone(2);
        }
      }
    },
  });
});
</script>

<style lang="scss" scoped>
.scroll-container {
  overflow-y: auto;
}
.top-section {
  // background: linear-gradient(to bottom right, #4a2c8e, #3a1f69);
  position: relative;
  overflow: hidden;
}
.pinned-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: url("../assets/images/body.jpg") no-repeat center center;
  background-size: cover;
  z-index: -1;
  /* Ensure background is behind content */
}

.phone-scroll {
  position: relative;
}

.phone-1,
.phone-2 {
  position: relative;
  will-change: transform;
  /* For smoother scrolling animations */
}
</style>
