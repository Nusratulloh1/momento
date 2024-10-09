<template>
  <footer class="py-12 lg:py-16 pb-12 bg-[#080808]">
    <div class="container xl:max-w-screen-xl mx-auto px-5 md:px-0">
      <div
        class="flex items-start gap-8 lg:gap-0 lg:items-center flex-col lg:flex-row justify-between"
      >
        <div>
          <Logo class="w-16 md:w-auto"></Logo>
        </div>
        <div class="w-full lg:w-auto">
          <SocialLinks />
        </div>
      </div>
      <div class="mt-8 lg:mt-16 mb-4 lg:mb-8 border-t border-[#475467]"></div>
      <div class="lg:flex items-center justify-between">
        <p class="text-[#D0D5DD] font-gilroy">
          © 2024 Momento. All rights reserved.
        </p>
        <ul class="flex items-center mt-4 lg:mt-0 gap-4 text-[#D0D5DD]">
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
  <script lang="ts" setup>
import Logo from "../Logo.vue";
import SocialLinks from "../SocialLinks.vue";
</script>
  <style lang="scss" scoped>
</style>