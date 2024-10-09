<template>
  <nav class="px-5 md:px-0 container xl:max-w-screen-xl mx-auto">
    <div class="flex items-center justify-between py-4">
      <Logo class=" w-16 md:w-[91px]" />
      <SocialLinks />
    </div>
  </nav>
</template>
<script lang="ts" setup>
import Logo from "../Logo.vue";
import SocialLinks from "../SocialLinks.vue";
</script>